Page({
  data: {
    stateWeb: false,
    url: "https://www2.claro.com.co/negocios/app/solicitudes/solicitud-producto-generico-nv/?promo=nclaroapp"
  },
  onLoad() {
    my.setNavigationBar({
      title: 'Adquirir Productos'
    });
  },
  onMakePhoneCall(e){
    my.makePhoneCall({ number: '6017435558' });
  },
  onWebView(e){
    this.setData({
      stateWeb: true
    });
  }
});
