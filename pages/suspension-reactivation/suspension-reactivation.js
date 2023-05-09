import { totalLinksInternet } from "../../services/totalLinksInternet";
import { totalLinksTelephone } from "../../services/totalLinksTelephone";
import { listLinksTelephoneByAccount } from "../../services/listLinksTelephoneByAccount";
import { listLinksInternetByAccount } from "../../services/listLinksInternetByAccount";

Page({
  data: {
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    numberLinksInternet: null,
    numberLinksTelephone: null,
  },
  async handleInternetCollapseChange(e) {
    const isOpened = e;
    if (isOpened) {
      try {
        const response = await totalLinksInternet(this.data);
        const data =
          response.data.data.response.ns0totalLinksInternetResponse.return;
        this.setData({ numberLinksInternet: data });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async handleTelephoneCollapseChange(e) {
    const isOpened = e;
    if (isOpened) {
      try {
        const response = await totalLinksTelephone(this.data);
        const data =
          response.data.data.response.ns0totalLinksTelephoneResponse.return;
        this.setData({ numberLinksTelephone: data });
      } catch (error) {
        console.log(error);
      }
    }
  },
  handleInputConfirm(e) {},
  async handleInternetTapLink() {
    try {
      const response = await listLinksInternetByAccount(this.data);
      const data = response.data.response;
      this.setListLinksAndNavigate(data, "modem");
    } catch (error) {
      console.log(error);
    }
  },
  async handleTelephoneTapLink() {
    try {
      const response = await listLinksTelephoneByAccount(this.data);
      const data = response.data.response;
      this.setListLinksAndNavigate(data, "telephone");
    } catch (error) {
      console.log(error);
    }
  },
  setListLinksAndNavigate(data, dispositiveType) {
    my.setStorageSync({
      key: "listLinks",
      data: data,
    });
    my.navigateTo({
      url: `/pages/suspension-reactivation/list-links/list-links?dispositiveType=${dispositiveType}`,
    });
  },
});
