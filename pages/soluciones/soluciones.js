import {requestApi} from '/utils/request.js';

let app = getApp();

Page({
  data: {
    solutions: [],
    url: 'https://apiselfservice.co/api/v1/core/web/EmpresasVideos.json'
  },
  onLoad() {
    my.setNavigationBar({
      title: 'Mi Claro'
    });
    this.getAsyncInformation();
  },
  getAsyncInformation(){
    my.showLoading({content: 'Loading Data...'});
    requestApi(this.data.url)
      .then(info => {
        my.hideLoading({});
        this.setData({
          solutions: info.data.response
        });
      })
      .catch(error => {
        my.hideLoading({});
        my.alert({
          title: 'Error',
          content: error.errorMessage,
          buttonText: 'Aceptar'
        });
      })
  },
  onRedirect(e){
    my.navigateTo({
      url: "/pages/adquirir-producto/adquirir-producto"
    })
  }
});
