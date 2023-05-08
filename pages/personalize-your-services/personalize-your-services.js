import {getAnyMAccList} from "/services/GetAnyMAccList.js"

Page({
  data: {
    searchValue: '',
    response: [],
    responseFiltered: [],
    datos: {
      data: null
    },
    url: 'https://apiselfservice.co/M3/Empresas/Postpago/GetAnyMAccList/'
  },
  onLoad(query) {
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
            token: account.cuenta.token,
            alias: account.cuenta.alias
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
  }
});
