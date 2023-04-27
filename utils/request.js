export function requestApi(url){
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        resolve(res);
      },
      fail: function(res) {
        reject(res);
      }
    });
  });
}