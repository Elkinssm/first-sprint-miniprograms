import {getCutOffAccountList} from "/services/GetCutOffAccountList.js"

Page({
  data: {
    response: [],
    datos: {
      data: null
    },
    url: 'https://apiselfservice.co/M3/Empresas/Hogar/GetCutOffAccountList/'
  },

  onLoad(query) {
    my.setNavigationBar({title: "Cuentas servicios fijos"});
    this.getCutOffAccountListHFC();
  },

  getCutOffAccountListHFC(){
    my.showLoading({ content: 'Loading Data...' });
    getCutOffAccountList(this.data.url, this)
      .then(res => {
        console.log(res);
        let mapper = res.data.response.AccountCutOffModel.map(account => {
          return {
            account: account.account,
            adress: account.adress.direction
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
      url: `/pages/manage-your-invoice/manage-your-invoice?numberAccount=${numberAccount}`
    });
  }
});