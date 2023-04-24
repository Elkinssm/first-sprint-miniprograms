Page({
  data: {
    bannerList: []
  },
  onLoad(query) {
    
    my.showLoading();
    var url= "https://apiselfservice.co/api/index.php/v1/core/movil/bannersList.json?newDesing=1&tab=8";
    my.httpRequest({
        url: url,
        method:'GET',
        dataType: 'text',
        success: res=>{
          var expresionRegular = /{[\s\S]*}/; 
          var response=JSON.parse(res.data.match(expresionRegular)[0]);
          const filteredResponse = response.response.map(({ name, url, image }) => ({ name, url, image }));
          this.setData({
          bannerList:filteredResponse
          })
          my.hideLoading();
      },
      fail: function(res) {
        console.log("Error Request Banners")
        my.hideLoading();
      }
    });
  },

  redirectToLogin(){
    console.log("Login access")
    my.navigateTo({
      url: '/pages/login-screen/login-screen'
    }) 
  }
});
