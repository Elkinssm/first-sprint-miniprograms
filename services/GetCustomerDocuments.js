let requestParameter = getApp();

export function getCustomerDocuments(url, that){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'POST',
      data: that.data.datos,
      headers: {
        "X-MC-LINE": that.data.datos.data.numeroCuenta,
        "X-MC-LOB:": 3,
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
        'X-SESSION-ID': requestParameter.globalData.tokenGetCustomerDocuments,
        "X-MC-USER-AGENT": requestParameter.globalData.tokenUserCustomerDocuments
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