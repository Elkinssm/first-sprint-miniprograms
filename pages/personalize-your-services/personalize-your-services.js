import {getAnyMAccList} from "/services/GetAnyMAccList.js"
import {asociarCuenta} from "/services/AsociarCuentaCliente.js"

Page({
  data: {
    customBodyVisible: false,
    infoModelVisible: false,
    mensajeInfo: "",
    primaryButtonText: "Aceptar",
    primaryButtonTextInfo: "Aceptar",
    searchValue: '',
    response: [],
    responseFiltered: [],
    datos: {
      data: null
    },
    url: 'https://apiselfservice.co/M3/Empresas/Postpago/GetAnyMAccList/',
    url2: 'https://apiselfservice.co/M3/Empresas/Postpago/AsociarCuentaCliente/'
  },
  onLoad(query) {
    this.getTotalAccounts();
  },
  getTotalAccounts(){
    my.showLoading({ content: 'Loading Data...' });
    getAnyMAccList(this.data.url, this)
      .then(res => {
        console.log(res)
        
        
        if(res.data.error == 1){
          this.setData({
            mensajeInfo: res.data.response,
            infoModelVisible: true,
          });
        }

        let mapper = res.data.response.masterAccountElement.map(account => {
          return {
            numberAccount: account.masterAccountNumber,
            payDate: account.payDate,
            lineOfBussiness: account.cuenta.LineOfBusiness,
            token: account.cuenta.token,
            alias: account.aliasAccount == "" ? "Sin nombre" : account.aliasAccount
          };
        });
        this.setData({
          response: mapper,
          responseFiltered: mapper
        });
        my.hideLoading({});
      })
      .catch(error => {
        console.log(error);
        my.hideLoading({});
      })
  },
  onNavigatePage(e){
    const numberAccount = e.target.dataset.item.numberAccount;
    my.navigateTo({
      url: `/pages/manageYourInvoice/manageYourInvoice?numberAccount=${numberAccount}`
    });
  },
  onSearchLIst(e){
    console.log(e);
    var results = this.data.response.filter(element => element.numberAccount.startsWith(e));
    console.log(results);
    this.setData({
      responseFiltered: results
    });
  },
  onPencilEdit(e){
    this.setData({ customBodyVisible: true });
  },
  onHandleClose(){
    this.setData({ customBodyVisible: false });
  },
  handleCloseInfo(){
    this.setData({ infoModelVisible: false });
  },
  onCambiarNombreServicio(){
    console.log("cambiando nombre");
  },
  formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value);

    let body = {
      "data": {
        "AccountId" : "8.22343403",
        "DocumentNumber" : "860066942",
        "DocumentType" : "5",
        "UserProfileID" : "evoluciondecanales@gmail.com",
        "alias": "test",
        "tipoAsociacionID": "2",
        "tipoCuentaID": "1"
      }
    };
    
    my.showLoading({ content: 'Loading Data...' });

    asociarCuenta(this.data.url2, body)
    .then(res => {
      console.log(res);

      my.hideLoading({});

      my.showLoading({ content: res.data.response });




    })
    .catch(error => {
      console.log(error);
      my.hideLoading({});
    })


  },
  formReset: function() {
    this.onHandleClose();
  }
});
