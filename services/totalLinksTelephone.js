export function totalLinksTelephone(context) {
  const myHeaders = {
    "x-carrier": "T-Mobile",
    "x-mc-app-v": "14.7.0",
    "x-mc-device-id":
      "kG6/x/lDtnumnyZmOc00685VPvcbWJnb8h9kubJdNcF6ErUQzzRFmw0Juf+evPduo6X2+voSecI/9tuSgZxoDNjEq/IpZKJOfar6qNITJXLpol4GXVUn4p5/QtqB0k2ajOXrDgFQHEQpXCev6SQiEVEpRQpJ8QRyKhIXupTGdWyZZi2oy4ZrWzof4/0+0qx8",
    "x-mc-device-name": "Googlesdk_gphone64_x86_64",
    "x-mc-he-v": "3",
    "x-mc-line": context.accountNumber,
    "x-mc-lob": "1",
    "x-mc-mail": "evoluciondecanales@gmail.com",
    "x-mc-so": "android",
    "x-mc-so-api": "31",
    "x-mc-so-phone-f": "Google",
    "x-mc-so-phone-m": "sdk_gphone64_x86_64",
    "x-mc-so-v": "12",
    "x-mc-user-agent":
      "eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKEdvb2dsZTsgc2RrX2dwaG9uZTY0X3g4Nl82NDsgXHUwMDNjYW5kcm9pZC8xMlx1MDAzZSkifQ==",
    "x-session-id":
      "U2FsdGVkX18AgmXYIM+wDsm/UzkEEh+9Vmt/kAkUIYwkrUBnbFr53aYTE+IuG3eyk+Vn5LJ6r6upNJ5o4XkUrwcWXlWMscib9tMXgvXLZgxyW1w1MDtIAzYAjo59+WP4ZHyRSuNPVzltVSLktWgbzo9IgrXSqTIcBXTjSbIVoAlAANLkgOaOdKAzvn9UGTe+o0+pUKY1z3RdvrNFOgRdeoEjWL8AVxUZhu3mMTf8f6MzKQplDxJLbwl+k7bdbPgfgy83FkKHXMy+uemwcm0vVukYRH+jAXcl6XmuN9JBXkc=",
    "x-wifi": "true",
    "Content-Type": "application/json",
    Cookie: "cookiesession1=678A3E32YZATUV0123456789890119D6",
  };

  const myBody = {
    data: {
      AccountNumber: context.accountNumber,
    },
  };

  return new Promise((resolve, reject) => {
    my.request({
      url: "https://apiselfservice.co/M3/Empresas/Hogar/totalLinksTelephone/",
      method: "POST",
      headers: { ...myHeaders },
      data: { ...myBody },
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      },
    });
  });
}

// var myHeaders = new Headers();
// myHeaders.append("x-carrier", "O2 - UK");
// myHeaders.append("x-mc-app-v", "15.0.0");
// myHeaders.append(
//   "x-mc-device-id",
//   "MIbdeTJ9uuvLqwNcsyfJoTgdg6PgPlTaja/yecAY+V+XHa1TAy15lzu+pMlWR1SU/YKSibyznGNjVNI/6Drti9snDHQwa0uqolMwlahsXYlkzBmTRvaSI1wsKy5X/xBLtoRDR8fZvOpZFE8+cvMTIS1Wv60boriwPpUiHCAkX/tizPpgPbsGMeK55Gn9rq4h"
// );
// myHeaders.append("x-mc-device-name", "OnePlusONEPLUS A5000");
// myHeaders.append("x-mc-he-v", " 3");
// myHeaders.append("x-mc-line", " 127053");
// myHeaders.append("x-mc-lob", " 1");
// myHeaders.append("x-mc-mail", " evoluciondecanales@gmail.com");
// myHeaders.append("x-mc-so", " android");
// myHeaders.append("x-mc-so-api", " 25");
// myHeaders.append("x-mc-so-phone-f", " OnePlus");
// myHeaders.append("x-mc-so-phone-m", "ONEPLUS A5000");
// myHeaders.append("x-mc-so-v", "7.1.1");
// myHeaders.append(
//   "x-mc-user-agent",
//   "eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKE9uZVBsdXM7IE9ORVBMVVMgQTUwMDA7IFx1MDAzY2FuZHJvaWQvNy4xLjFcdTAwM2UpIn0="
// );
// myHeaders.append("x-session-id", "");
// myHeaders.append("x-wifi", " true");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Cookie", "cookiesession1=678A3E32YZATUV0123456789890119D6");

// var raw = JSON.stringify({
//   data: {
//     AccountNumber: "127053",
//   },
// });

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// fetch(
//   "https://apiselfservice.co/M3/Empresas/Hogar/totalLinksTelephone/",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
