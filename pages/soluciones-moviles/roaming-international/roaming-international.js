import {requestApi} from "/services/retrieveRoamingService"

Page({
  data: {
    response: {},
    nit:'900999998',
    showContent: false,
    iconDefault: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg',
    lineNumber: '3102659717',
    isActive: false,
    expirationDate: 'Indefinido',
    url: 'https://apiselfservice.co/api/index.php/v1/soap/retrieveRoamingService.json',
    switchServiceState: false
  },

  onReady() {
    my.setNavigationBar({
      title: 'Roaming internacional',
      success() {},
      fail() {},
    });
  },

  onLoad() {
    my.showLoading({
      content: 'Cargando...',
    });
    const that = this;

    requestApi(this.data.url, that)
    .then(res => {
      var expritationDateStr=res.data.response.estado.fechaExpiracion;
      var isActiveService=res.data.response.estado.esActivo;
      if (expritationDateStr.trim() != '') {
        that.setData({
          expirationDate: expritationDateStr
        });
      }
      if(isActiveService==='1'){
        that.setData({
          switchServiceState: isActiveService,
          isActive: isActiveService
        });
      }
      console.log(this.data.switchServiceState)
      // console.log("esactivo-->",res.data.response.estado.esActivo)
      my.hideLoading({});
    })
    .catch(error => {
      my.hideLoading({
        page: that,
      });
      my.alert({
        title: 'Error',
        content: 'En este momento no podemos atender esta solicitud, intenta nuevamente',
        buttonText: 'Cerrar',
      });
    });
  },
  
  switch1Change(e) {
    console.log("estoy  aqui--->",e.detail.value);
    this.setData({
      switchServiceState: e.detail.value,
    });
  },
  toggleCollapse: function () {
    this.setData({
      showContent: !this.data.showContent,
      iconDefault: !this.data.showContent ? 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/expand_less/default/48px.svg' : 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg'
    });
  },

  onPayment: function () {
    my.navigateTo({
      url: '/pages/payment/payment?url=https://portalpagos.claro.com.co/index.php?view=vistas/personal/claro/newclaro/inicio.php'
    })
  }
});