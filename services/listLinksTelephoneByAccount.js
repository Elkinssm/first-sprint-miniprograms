export function listLinksTelephoneByAccount(context) {
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
      "U2FsdGVkX1/E8nMh3J79i2bJolwQgoNyRoKKf1wekb+LufuT+YSZpE/p3jMxtWdbrj7D7LuFEsz3VZWAUmd5GGxMs7IcxUN3JFaHp3+NAeK3YidDDxj8DLdbWOdmYI/9QflqWiqsy0ZJb6lJ/9RX5/eZ4vx0AsT7jU/7y9JPlBtNjdxGB3VF+kG7aY7Ka63fOCyDQhAE8OjbIvn1XfGrewH2gsJbRFdUwW1Qm1Op4bvFcgRK+9IvgT0glceyE32v1XyFmaejyzcTLZLZn3eyHmot0M0U1Y7a+CTLAa195Gw=",
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
      url: "https://apiselfservice.co/M3/Empresas/Hogar/listLinksTelephoneByAccount/",
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
