import { requestApiretrieve } from "/services/retrieveRoamingService";
import { requestApiCheckInstalled } from "/services/checkInstalledPackagesService";
import { requestApiDisableRoamingPackage } from "/services/disableRoamingPacket";
import { requestApiDisableRoamingService } from "/services/disableRoamingService";

Page({
  data: {
    modalServiceVisible: false,
    modalVisible: false,
    modalConfirmDisableService: false,
    descriptionModal: "",
    loaded: false,
    modalVisibleDescription: false,
    response: {},
    lineNumber: "",
    nit: "900999998",
    isActive: false,
    expirationDate: "Indefinido",
    switchServiceState: false,
    packagedInstalled: [],
    condServ: "",
    showLoading: false,
    urlChekingInstalled:
      "https://apiselfservice.co/M3/Empresas/Postpago/checkInstalledPackages/",
    urlRetrieveRoaming:
      "https://apiselfservice.co/api/index.php/v1/soap/retrieveRoamingService.json",
    urlDisableRoamingPacket:
      "https://apiselfservice.co/M3/Empresas/Postpago/DisableRoamingPacket/",
    urlDisableRoamingService:
      "https://apiselfservice.co/api/index.php/v1/soap/activateRoamingService.json",
  },


  onReady() {
    my.setNavigationBar({
      title: "Roaming internacional",
      success() {},
      fail() {}
    });
  },

  onLoad() {
    const numberLinerSearch=getApp().globalData.lineNumber;
    this.setData({
      lineNumber:numberLinerSearch
    })
    
    console.log(this.data.lineNumber)
    my.showLoading({
      content: "Cargando..."
    });
    console.log(getApp().globalData.lineNumber)
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
        switchServiceState: true,
        isActive: isActiveService
      });
    }
    console.log("test",this.data.switchServiceState)
  },
  packageInstalledService() {
    const errorGlobalSession=getApp().globalData.sessionError;
    requestApiCheckInstalled(this.data.urlChekingInstalled, this)
      .then(res => {
        this.packageInstalledValidation(res);
      })
      .catch(error => {
        my.hideLoading();
        if (error.status === 401 && error.data && error.data.response === 'Error de acceso, tiempo de sesion agotado') {
          my.alert({
            content: 'Su sesión ha expirado. Por favor, inicie sesión de nuevo.',
            buttonText: "Cerrar",
            success: () => {
              my.reLaunch({
                url: '/pages/login-screen/login-screen'
              }) 
          },
        })
        } else {
          my.alert({ content: error.data.response === undefined || error.data.response === null ? errorGlobalSession : error.data.response, buttonText: "Cerrar" });
        }
      });
  },
  packageInstalledValidation(res) {
    const packageInstallList = res.data.response.map(item => {
      const { name, description, codServ } = item;
      return { name, description, codServ };
    });
    this.setData({
      packagedInstalled: packageInstallList,
      loaded: true,
      codServ: "test"
    });
    my.hideLoading();
  },
  packageDisableRoaming(disableData) {
    
    requestApiDisableRoamingPackage(
      this.data.urlDisableRoamingPacket,
      disableData,
      this
    )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        my.hideLoading({
          page: this
        });
        my.alert({
          content: "error de sesion,tiempo de sesion agotado",
          buttonText: "Cerrar"
        });
      });
  },

  disableRoamingService(disableDataService) {
    requestApiDisableRoamingService(
      this.data.urlDisableRoamingService,
      disableDataService,
      this
    )
      .then(res => {
        if(res.data.error == 0) {
          this.setData({
            switchServiceState: false,
          });
          this.openModalConfirmDisableService();
        } else {
          this.hideLoading({
            page: this
          });
          my.alert({
            content: res.data.response,
            buttonText: "Cerrar"
          });
          this.setData({
            switchServiceState: true
          })
        }
        console.log(res);
        
      })
      .catch(error => {
        this.hideLoading({
          page: this
        });
        my.alert({
          content: error,
          buttonText: "Cerrar"
        });
      });
  },

  switchChange(e) {
    console.log(e);

    this.setData({
      switchServiceState: e.detail.value
    });

    if(!(e.detail.value)) {
      this.setData({
        modalServiceVisible: true
      })
    }
    
  },

  openModalConfirmDisableService() {
    console.log("confirm disable");
    
    this.setData({
      modalConfirmDisableService: true,
    });

    this.hideLoading();
   
  },

  handleOpenModal(e) {
    console.log(e);
    console.log("Entrando");
    this.setData({
      modalVisible: true,
      selectedPackageCode: e.target.dataset.code
    });
    console.log(this.data.selectedPackageCode);
  },

  onAcceptButtonTap() {
    console.log("Aceptar");
    this.setData({
      modalVisible: false
    });
    const disableData = {
      min: "3103815747",
      codePackage: this.data.selectedPackageCode
    };
    this.packageDisableRoaming(disableData);

    my.showLoading({
      content: "Cargando..."
    });

    // Llamar a my.reLaunch para recargar la página
    my.reLaunch({
      url:
        "/pages/soluciones-moviles/roaming-international/roaming-international",
      success: function() {
        this.hideLoading();
      }
    });
  },

  // Disabling roaming service
  onAcceptButtonRoamingTap() {
      console.log("Disable");
      this.setData({
        modalServiceVisible: false
      });

      const disableData = {
        activar: "0",
        ExpirationDate: ""
      };

      this.showLoading({
        content: "Cargando..."
      });
      this.disableRoamingService(disableData);
  },

  onCancelButtonTap() {
    console.log("Cancelar");
    this.setData({
      modalVisible: false
    });
  },
  
  handleOpenModalDescriptionPlan(e) {   
    if (e.currentTarget.dataset.item) {
      this.setData({
        modalVisibleDescription: true,
        descriptionModal: e.currentTarget.dataset.item
      });
    }
  },

  handleClose() {
    this.setData({
      modalVisible: false,
      modalVisibleDescription: false
    });
  },

  // Disbabling roaming service
  handleCloseRoaming() {
    this.setData({
      modalConfirmDisableService: false,
      switchServiceState: false
    });
  },

  redirectToRoamingWeb() {
    my.navigateTo({
      url:
        "/pages/soluciones-moviles/roaming-international/redirectToRoamingWeb/redirectToRoamingWeb"
    });
  },
  redirectOfertaServicios() {
    my.navigateTo({
      url:
        "/pages/soluciones-moviles/roaming-international/redirectToOfers/redirectToOfers"
    });
  },

  redirectHomeServices() {
    my.navigateTo({
      url: "/pages/soluciones-moviles/soluciones-moviles"
    });
  },

  onCancelButtonRoamingTap() {
    console.log("Cancelar");
    this.setData({
      modalServiceVisible: false,
      switchServiceState: true
    });
  },

  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  //Metodo necesario para ocultar el loading
  hideLoading() {
    this.setData({
      showLoading: false
    });
  }
});
