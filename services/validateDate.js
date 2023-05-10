export function validateDate() {
  const myHeaders = {
    Cookie: "cookiesession1=678A3E32YZATUV0123456789890119D6",
  };

  return new Promise((resolve, reject) => {
    my.request({
      url: "https://apiselfservice.co/M3/General/validateDate",
      method: "GET",
      headers: { ...myHeaders },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      },
    });
  });
}
