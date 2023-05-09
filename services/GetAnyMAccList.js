let requestParameter = getApp();

export function getAnyMAccList(url, data){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: data.datos,
      headers: {
        "X-MC-MAIL": "angie.copete@neoris.com",
        "X-MC-SO": "android",
        "X-Carrier": "Tigo",
        "X-Wifi": true,
        "X-MC-HE-V": 3,
        "X-MC-SO-V": "8.1.0",
        "X-MC-SO-API": 27,
        "X-MC-SO-PHONE-F": "HUAWEI",
        "X-MC-SO-PHONE-M": "DUB-LX3",
        "X-MC-APP-V": "15.0.0",
        "X-MC-DEVICE-NAME": "HUAWEIDUB-LX3",
        'X-SESSION-ID': requestParameter.globalData.tokenGetAnyMAccList,
        "X-MC-USER-AGENT": requestParameter.globalData.tokenUserGetAnyMAccList
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

// export function getAnyMAccList(url, data){
//   return new Promise((resolve, reject) => {
//     my.request({
//       url: url,
//       method: 'POST',
//       data: data.datos,
//       headers: {
//         "X-MC-MAIL": "evoluciondecanales@gmail.com",
//         "X-MC-LINE": 3209911758,
//         "X-MC-SO": "android",
//         "X-Carrier": "Tigo",
//         "X-Wifi": true,
//         "X-MC-HE-V": 3,
//         "X-MC-SO-V": "8.1.0",
//         "X-MC-SO-API": 27,
//         "X-MC-SO-PHONE-F": "HUAWEI",
//         "X-MC-SO-PHONE-M": "DUB-LX3",
//         "X-MC-APP-V": "15.0.0",
//         "X-MC-DEVICE-NAME": "HUAWEIDUB-LX3",
//         'X-SESSION-ID': requestParameter.globalData.tokenGetAnyMAccList,
//         "X-MC-USER-AGENT": requestParameter.globalData.tokenUserGetAnyMAccList
//       },
//       success: (res) => {
//         resolve(res);
//       },
//       fail: (res) => {
//         reject(res);
//       }
//     });
//   });
// }