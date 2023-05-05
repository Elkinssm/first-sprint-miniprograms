import { requestApiretrieve } from "/services/retrieveRoamingService";
import { requestApiCheckInstalled } from "/services/checkInstalledPackagesService";

Page({
  data: {
    descriptionModal:"",
    loaded: false,
    modalVisibleDescription: false,
    response: {},
    lineNumber:getApp().globalData.lineNumber,
    nit: "900999998",
    isActive: false,
    expirationDate: "Indefinido",
    switchServiceState: false,
    packagedInstalled: [],
    urlChekingInstalled:"https://apiselfservice.co/M3/Empresas/Postpago/checkInstalledPackages/",
    urlRetrieveRoaming:"https://apiselfservice.co/api/index.php/v1/soap/retrieveRoamingService.json"
  },

  onReady() {
    my.setNavigationBar({
      title: "Roaming internacional",
      success() {},
      fail() {}
    });
  },

  onLoad() {
    my.showLoading({
      content: "Cargando..."
    });
    requestApiretrieve(this.data.urlRetrieveRoaming, this)
      .then(res => {
        this.retrieveServiceValidation(res);
        this.packageInstalledService();
      })
      .catch(error => {
        my.hideLoading({
          page: this
        });
        my.alert({
          title: "Error",
          content:
            "En este momento no podemos atender esta solicitud, intenta nuevamente",
          buttonText: "Cerrar"
        });
      });
  },
  retrieveServiceValidation(res) {
    var expritationDateStr = res.data.response.estado.fechaExpiracion;
    var isActiveService = res.data.response.estado.esActivo;
    if (expritationDateStr.trim() != "") {
      this.setData({
        expirationDate: expritationDateStr
      });
    }
    if (isActiveService === "1") {
      this.setData({
        switchServiceState: isActiveService,
        isActive: isActiveService
      });
    }
  },

  packageInstalledService() {
    requestApiCheckInstalled(this.data.urlChekingInstalled, this)
    .then(res => {
      this.packageInstalledValidation(res);
    })
    .catch(error => {
      my.hideLoading({
        page: this
      });
      my.alert({
        content:
          error,
        buttonText: "Cerrar"
      });
    });
  },

  packageInstalledValidation(res) {
    const packageInstallList = res.data.response.map(item => {
      const { name, description } = item;
      return { name, description };
    });
    console.log(packageInstallList)
    this.setData({
      packagedInstalled: packageInstallList, 
      loaded: true
    });
    my.hideLoading();
  },

  switchChange(e) {
    this.setData({
      switchServiceState: e.detail.value
    });
  },
  handleOpenModalDescriptionPlan(e) {
    this.setData({
      modalVisibleDescription: true,
      descriptionModal: e.currentTarget.dataset.item
    });
  },
  
  handleClose() {
    this.setData({
      modalVisibleDescription: false
    });
  },
  redirectToRoamingWeb(){
        my.navigateTo({
          url: '/pages/soluciones-moviles/roaming-international/redirectToRoamingWeb/redirectToRoamingWeb'
        })
  },
  redirectOfertaServicios() {
    my.navigateTo({
      url: '/pages/soluciones-moviles/roaming-international/redirectToOfers/redirectToOfers'
    })
  },

  redirectHomeServices() {
    my.navigateTo({
      url: '/pages/soluciones-moviles/soluciones-moviles'
    })
  },
});
