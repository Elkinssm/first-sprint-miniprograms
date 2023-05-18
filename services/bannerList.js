let requestParameter = getApp();

export function requestbannerList(url, that) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      headers: {
        'X-MC-SO': 'android',
        'X-Carrier': 'Claro',
        'X-Wifi': true,
        'X-MC-HE-V': 3,
        'X-MC-SO-V': 11,
        'Cache-Control': 'no-cache',
        'X-MC-SO-API': 30,
        'X-MC-SO-PHONE-F': 'Xiaomi',
        'X-MC-SO-PHONE-M': 'M2101K7BL',
        'X-MC-APP-V': '15.1.3',
        'X-MC-DEVICE-NAME': 'XiaomiM2101K7BL',
        'X-MC-DEVICE-ID': 'SW56Uk0/Sprksn2OZAcrgTfELmfgbRFYXXip97X7AjW1p6/lGA8VOLlvSIaOgLg+5zN3qNGX+BbnhAldfGX/mVdKNoK5nS9F6+MhEKEmhYA4tGSwtQj/zDKt56i1xAkG2EsFv01JY0q01pGpwJNxpEFhvRt7vILV7JrZiZtRZvw=',
        'X-MC-USER-AGENT': 'eyJpcCI6IjE5Mi4xNjguMS4xMDEiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChYaWFvbWk7IE0yMTAxSzdCTDsgXHUwMDNjYW5kcm9pZC8xMVx1MDAzZSkifQ==',
       },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}
