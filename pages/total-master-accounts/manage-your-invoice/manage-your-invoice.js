import {getCustomerDocuments} from "/services/GetCustomerDocuments.js";

Page({
  data: {
    nit: '',
    url: "https://apiselfservice.co/api/index.php/v1/rest/getCustomerDocuments.json",
    responsePrueba: {},
    response: {},
    datos: {
      data: {
        "numeroCuenta": '',
        "canal": "hogar"
      }
    },
    buttons: [
      {
        name: 'Paga tu factura aquí',
        stateImg: true,
        imgSrc: '/assets/icons/request_quote_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Descarga tu factura',
        stateImg: true,
        imgSrc: '/assets/icons/download_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Factura digital',
        stateImg: true,
        imgSrc: '/assets/icons/description_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      },
      {
        name: 'Descubre tus beneficios',
        stateImg: true,
        imgSrc: '/assets/icons/settings_white.svg',
        iconArrowSrc: '/assets/icons/navigateNext.svg',
        style: 'background-color: var(--claro-color); color: white; border-color: var(--claro-color); font-weight: bold;'
      }
    ]
  },
  onLoad(query) {
    my.setNavigationBar({title: "Administra tu factura"});
    this.getCustomerDocumentsList(query);
  },
  getCustomerDocumentsList(info){
    this.setData({ ['datos.data.numeroCuenta']: info.numberAccount, nit: info.nit });
    my.showLoading({ content: 'Loading Data...'});
    getCustomerDocuments(this.data.url, this)
      .then(res => {
        console.log(res);
        let mapper = {
          title: res.data.response.usuario.nombre,
          ref: res.data.response.facturaActual.ReferenciaPagoTotal,
          masterAccount: info.numberAccount,
          payDate: res.data.response.facturaActual.pagoOportuno,
          startDate: res.data.response.facturaActual.inicioPeriodo,
          endDate: res.data.response.facturaActual.finPeriodo,
          totalToPay: Number(res.data.response.facturaActual.valor).toLocaleString('es-CO', {style: 'currency', currency: 'COP'})
        };
        this.setData({
          response: mapper,
          responsePrueba: res
        });
        my.hideLoading({});
      })
      .catch(error => {
        console.log(error);
        my.hideLoading({});
      });
  }
});
