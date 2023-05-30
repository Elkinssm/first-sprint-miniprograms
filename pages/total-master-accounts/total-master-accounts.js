import {getAnyMAccList} from "/services/GetAnyMAccList.js"

Page({
  data: {
    response: [],
    datos: {
      data: null
    },
    url: 'https://apiselfservice.co/M3/Empresas/Postpago/GetAnyMAccList/'
  },
  onLoad(query) {
    my.setNavigationBar({title: "Cuentas Maestras Postpago"});
    this.getTotalAccounts();
  },
  getTotalAccounts(){
    my.showLoading({ content: 'Loading Data...' });
    getAnyMAccList(this.data.url, this)
      .then(res => {
        console.log(res);
        let mapper = res.data.response.masterAccountElement.map(account => {
          return {
            numberAccount: account.masterAccountNumber,
            payDate: account.payDate,
            lineOfBussiness: account.cuenta.LineOfBusiness,
            token: account.cuenta.token
          };
        });
        this.setData({
          response: mapper
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
  }
});
