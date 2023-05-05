import { requestApiretrieve } from "/services/retrieveRoamingService";
import { requestApiCheckInstalled } from "/services/checkInstalledPackagesService";
import { requestApiDisableRoamingPackage } from "/services/disableRoamingPacket";

Page({
  data: {
    modalVisible: false,
    loaded: false,
    response: {},
    lineNumber: getApp().globalData.lineNumber,
    nit: "900999998",
    isActive: false,
    expirationDate: "Indefinido",
    switchServiceState: false,
    packagedInstalled: [],
    condServ: "",
    urlChekingInstalled:
      "https://apiselfservice.co/M3/Empresas/Postpago/checkInstalledPackages/",
    urlRetrieveRoaming:
      "https://apiselfservice.co/api/index.php/v1/soap/retrieveRoamingService.json",
    urlDisableRoamingPacket:
      "https://apiselfservice.co/M3/Empresas/Postpago/DisableRoamingPacket/"
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
          content: error,
          buttonText: "Cerrar"
        });
      });
  },
  packageInstalledValidation(res) {
    // const jsonString =
    //   '{"secs":"00:00:00.6431","tiempo":0.6431,"error":0,"response":[{"typeServ":"B","descriptionServ":"BUNDLE","codServ":"959","name":"PassAmericaE4D","description":"PaquetePasaporteAmericade4diasqueaplicadesdesuusopor$23.900.Permiteutilizardesdelospaises:Argentina,Brasil,Bolivia,Chile,Canada,CostaRica,Ecuador,ElSalvador,EstadosUnidos,Guatemala,Honduras,Mexico,Nicaragua,Panama,Paraguay,Peru,PuertoRico,Rep.DominicanayUruguay,lacapacidaddisponiblededatosdetuplanenRoamingInt.(planescondatosilimitadospuedenutilizarhasta40Gigas)y59minutosparallamadasaColombia,entrantesysalientesenelpaisvisitado.Losminutosaotrospaises(llamadassalientesdelargadistanciaaundestinodistintoalpaisvisitadooColombia)tienenunvalorde$275.MinutoadicionalaColombia,entranteysalientealpaisenelqueseencuentra$275.UnavezconsumidaslasGigasdisponiblespodraseguirutilizandoelserviciodedatospormediodeunpaquetededatos.DatosenRoamingInt.tieneImpoconsumodel4%,delosconsumosquesuperen1.5UVTs.","scale":"B","rate":"PREFERENCIAL","dateIni":"2023-05-02T16:01:58.000-05:00","dateEnd":"2050-12-31T00:00:00.000-05:00","classification":"C","convertible":"S"},{"typeServ":"B","descriptionServ":"BUNDLE","codServ":"744","name":"PassAmericaEYN","description":"CargoDiario6.900IVA19porcientoincl.Permiteutilizardesdelospaises:Argentina,Brasil,Bolivia,Canada,Chile,CostaRica,Ecuador,ElSalvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,Paraguay,Peru,PtoRico,RepDominicana,UruguayyUSA,lacapacidaddisponiblededatosdetuplanenRoamingInt.(planescondatosilimitadospuedenutilizarhasta40Gigas)y\\/o500minutosparallamadasaColombia,entrantesysalientesenelpaisqueseencuentra.LlamadassalientesaundestinodistintoalpaisvisitadooColombiatienenunvalorde275imptosincl.Valorminutoadicional275imptosincl.UnavezconsumidaslasGigasdisponiblespodraseguirutilizandoelserviciodedatospormediodeunpaquetededatos.VigenciaIndefinida.DatosenRoamingInt.tieneImpoconsumodel4porciento,delosconsumosquesuperenelmontode1.5UVTs","scale":"B","rate":"PREFERENCIAL","dateIni":"2023-05-02T16:00:12.000-05:00","dateEnd":"","classification":"C","convertible":"S"}]}';
    // const jsonObject = JSON.parse(jsonString);

    const packageInstallList = res.data.response.map(item => {
      const { name, description, codServ } = item;
      return { name, description, codServ };
    });
    console.log(packageInstallList);
    this.setData({
      packagedInstalled: packageInstallList,
      loaded: true,
      codServ: "test"
    });
    my.hideLoading();
  },

  packageDisableRoaming(disableData) {
    // console.log(disableData);
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
          content: error,
          buttonText: "Cerrar"
        });
      });
  },

  switchChange(e) {
    this.setData({
      switchServiceState: e.detail.value
    });
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

  handleClose() {
    this.setData({
      modalVisible: false
    });
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
        my.hideLoading();
      }
    });
  },

  onCancelButtonTap() {
    console.log("Cancelar");
    this.setData({
      modalVisible: false
    });
  }
});
