let requestParameter = getApp();

export function getCutOffAccountList(url, data){
  return new Promise((resolve, reject) => {
  console.log()
    my.request({
      url: url,
      method: 'POST',
      data: data.datos,
      headers: {
        "X-MC-MAIL": "evoluciondecanales@gmail.com",
        "X-MC-SO": "android",
        "X-Carrier": "O2 - UK",
        "X-Wifi": true,
        "X-MC-HE-V": 3,
        "X-MC-SO-V": "7.1.1",
        "X-MC-SO-API": 25,
        "X-MC-SO-PHONE-F": "OnePlus",
        "X-MC-SO-PHONE-M": "ONEPLUS A3010",
        "X-MC-APP-V": "15.0.0",
        "X-MC-DEVICE-NAME": "OnePlusONEPLUS A3010",
        'X-SESSION-ID': requestParameter.globalData.tokenGetCutOffAccountList,
        "X-MC-USER-AGENT": "eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IE9ORVBMVVMgQTMwMTA7IFx1MDAzY2FuZHJvaWQvNy4xLjFcdTAwM2UpIn0="
      },

      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    });
  });
}