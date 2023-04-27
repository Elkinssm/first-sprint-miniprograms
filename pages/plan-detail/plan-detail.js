Page({
  data: {
    response: {},
    showContent: false,
    iconDefault: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg',
    lineNumber: '3058863237',
    planName: '',
    planText: '',
    socialNetworks: [],
    voiceText: '',
    smsText: '',
    planDescription: '',
  },

  onReady() {
    my.setNavigationBar({
      title: 'Detalle de tu plan',
      success() {},
      fail() {},
    });
  },

  onLoad() {
    my.showLoading({
      content: 'Cargando...',
    });
    const that = this;
    my.request({
      url: 'https://apiselfservice.co/api/index.php/v1/soap/retrievePlan.json',
      method: 'POST',
      data: {
        "AccountId": that.data.lineNumber,
        "accountIdHEader": "",
        "alias": that.data.lineNumber,
        "custcode": "",
        "esEmpresas": 0,
        "isZonaPublica": false,
        "LineOfBusiness": "3",
        "selected": false,
        "token": "U2FsdGVkX1/igaNe0wMoxrqEdx/ivbleV2MBMDQ7wBWX5GXT7qQaWXXL3cq5c0xfkwMEnVgfM/YcMpPsJUQx0PBbxV4c5Mtn0T7dy8Z5ZHessY7S06xPS2Cq3zrqK6LFOGSMrQxcWA/w7QZotwXHCv21CxUFM6aL4qVU+6OUm/na3PpzkrpzSkCEHMNM6b8qcLmtYj2+wa5OempXLaQQSZO6HXcoCMfwRKZOMy/LEQ0RgSXt4Lqn7lCfXRvIUqpibiUN7ZSWHjoxvKUMtXnVczOGoQV5GzngyR5WLFDEdOximSnaeWZRccDKJdHJsBIG343Cm7ZTVkCHUMSdSLV6CuwmT56v1AhzpeFKpAtUP1xaqjmWSyysZx3iDllbqAiSziLrq+Y86/QavbJumi3Tn8Plq7Mp44iUXQm5hoCxNOB2UGdTwiKVUtdGgRI1ekBvbd6477YLZ/qdid6Chf2bTRv8MngBf9Zpwf0oEHG7DvWqe8VOvq6RpvSJkwKZU/CnHuCMkvCuQQjGbzNQpMPbXTBCsvzkttuk3dhyr/cyQ4QlZY9HuxdmTvpPWxEn18LTwp5t/YbipQXdVtkEXv1xbTuxItei37ZbThvSbL82L9nzRLFGAPBxVDibQ6j73NZF7joKBPTGYW22MRtJLLApmNy/c81fMr9zp05Vv87mXhD/Yo0cUD7a37Y+vaHgI7mAQ7gpN0BwvcgZ1I+up9tNSUzlXn6rjWlo5RvTzNaFSI9A4eVGxIKlDm4n6TbvsvKvwe4lr9iRye/vrXi1Zp2YsV8wSsrIbPfLHm3RReLneh8jb/KzKSy3hf9VPM7MeQTqKGVL4lm6s5mDRuUco8MVdCAVQnEaISlkmm596jWZ6ExAAyyw4oMvaqVBACSCZgh8gQbCTwyxE/KDPVwQo18E7Fi4gKUmaRQCLrRxsINA7Vr8E3I2rrTVhodoZn1tLgSwVxEs9JzjAinO0FjNxZT6Xw\u003d\u003d",
        "valida": 0
      },
      headers: {
        'X-MC-MAIL': 'juan.saavedra9306@gmail.com',
        'X-MC-SO': 'android',
        'X-MC-DEVIDE-ID': 'AUZ0ymJgRXcXNz2z3Ny6wxq7fKe95gHEpnHdSuYqR+WPGE9cfPsmcuBJtQ/pb0P2pFX9oTzHfojwr1KYCL+Ux0PkJDRSqjl4TqeT1GLdh28GUguVlFo/U6K+3XmxLA8S8lD40TOfrfzCOyxQcR4PxG4mxm8Kq0TsmNeANigJ6lVwg9r3fSuWL2pvcK5AxwC8',
        'X-MC-USER-AGENT': 'eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IE9ORVBMVVMgQTMwMTA7IFx1MDAzY2FuZHJvaWQvNy4xLjFcdTAwM2UpIn0=',
        'X-SESSION-ID': 'U2FsdGVkX19zUQNNE4kYeMvX1rxcucK5vhLEphYo0g+tSs+pPE9Q6uNDSWPBoTqIJR90hHnPTB56zNtMiEK4JUzHCWMOkWiHykoDia/1G0cuGsBK4XEcrEA/PnQ6IndcUvWAOp9KhiARdkNnWY0zK922Az5ZtJUgKvqlDVaN26PSEy8J94gXxnD/S2viWtPT2aGqhtPF/yGENfElzNsDOJQbK/NjfXaGlDr5xQpb7k6tzti96Guyx5c0ePrJ2yd9jx9C6x1KiRk+inmvbITnaj+qw5HuyV9uoAfC6p5fYQj9bt8i1kWKzOeM0gipGaIbOK1HTcnydnafdWRa0QT4I3c9/Pk1t9rDwzgxNcoWsScFf+ZhS9OX/eryxNltfwOvdDD5T+K0WzMQGx0QzqTKpTX0BHBBu3qcy4TEKNzfbRRYrBqWUe+Uoj23f/4g/cZAjLwX8BCSaTrj0cPs1pg2gu3eVTBUpbzl2iCwxzHj33tqM91QMR5KZJOBIcn5atH7nPbrz12tfMgODQdoT1ZfR6Suie/qgNly3vDpOEDL+eqBsT9ZWkhiqjGDvhHUMzqh+UUk0zB71QQqgFjGW8Jh2/kJnrmcv0Lg8aAaO+d1pU8BPG2yC6wR3sssHMhl5aFP4G5/1McF2r87gMEHspaoUQTtxN52Z8By/G+RakRruEndOpYi4ppi26O6R2Z4/TKs5R6e3ceRVL3yijTqSWCeflX1bhDz5PVbJ79AflMTsHN+Fjt/rfRpPoTLkv5FyxIWdTUT4myzByTR+6zyS4Hu83rwJUTcDcGL8UxclQljZ4FpSQNv5t4bkXS9OLQkSHwzIH59RItsc9EkHlRGOKCbAOhZjfmvxOTWUn93DZODyxwgE11QM5hlluTcnsLYXuqLBP6Q3yr0gDr891YGnh/2U5aXFS5IPzYkupivM+KxQFILg5YUXTxxik6rQhw8x6qr7bdRrCwVcxRt05S7jTQcBQ==',
        'X-MC-LINE': that.data.lineNumber,
        'X-MC-LOB': '3',
      },
      success: (res) => {
        that.setData({
          planName: res.data.response.PlanName,
          planText: res.data.response.textDatos,
          socialNetworks: res.data.response.SocialNetworksList.map(social => social.icon),
          voiceText: res.data.response.voz,
          smsText: res.data.response.sms,
          planDescription: res.data.response.PlanDescription
        });
      },
      complete: () => {
        my.hideLoading({
          page: that,
        });
      },
      fail: (res) => {
        my.hideLoading({
          page: that,
        });
        my.alert({
          title: 'Error',
          content: 'En este momento no podemos atender esta solicitud, intenta nuevamente',
          buttonText: 'Cerrar',
        });
      }
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