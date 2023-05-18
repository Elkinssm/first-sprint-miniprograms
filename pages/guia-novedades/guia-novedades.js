import{requestbannerList} from"/services/bannerList"
Page({
  data: {
    bannerList: [],
    url:"https://apiselfservice.co/api/index.php/v1/core/movil/bannersList.json?newDesing=1&tab=8",

  },
  onLoad() {
    my.showLoading();
    requestbannerList(this.data.url, this)
    .then(res => {
      console.log("respuesta---->",res)
      if (
        res &&
        res.data &&
        res.data.response &&
        res.data.response !== null &&
        res.data.response !== undefined &&
        res.data.error == 0
      ) {
        const filteredResponse = res.data.response.map(({ name, url, image }) => ({ name, url, image }));
        this.setData({
        bannerList:filteredResponse
        })
        my.hideLoading();
      } else {
        my.alert({
          content: "Ha ocurrido un error. Intenta de nuevo.",
          buttonText: "Cerrar"
        });
      }
      my.hideLoading();
    })
    .catch(error => {
      my.alert({
        content: "Ha ocurrido un error. Intenta de nuevo.",
        buttonText: "Cerrar"
      });
    });
  },

  redirectToLogin(){
    my.navigateTo({
      url: '/pages/login-screen/login-screen'
    }) 
  }
});
