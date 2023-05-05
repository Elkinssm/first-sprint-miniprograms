import {getCustomerDocuments} from "/services/GetCustomerDocuments.js";

Page({
  data: {
    response: [],
    datos: {
      data: {
        "numeroCuenta": '',
        "canal": "hogar"
      }
    },
    url: "https://apiselfservice.co/api/index.php/v1/rest/getCustomerDocuments.json",
  },
  onLoad(query) {
    this.getCustomerDocumentsList(query.numberAccount);
  },
  getCustomerDocumentsList(line){
    console.log(my.getAppIdSync());
    this.setData({ ['datos.data.numeroCuenta']: line });
    getCustomerDocuments(this.data.url, this)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
});
