import { totalLinksInternet } from "../../services/totalLinksInternet";
import { totalLinksTelephone } from "../../services/totalLinksTelephone";
import { listLinksTelephoneByAccount } from "../../services/listLinksTelephoneByAccount";
import { listLinksInternetByAccount } from "../../services/listLinksInternetByAccount";

Page({
  data: {
    showLoading: false,
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    numberLinksInternet: null,
    numberLinksTelephone: null,
  },
  onLoad() {
    this.showLoading();
  },
  onReady() {
    this.hideLoading();
  },
  async handleInternetCollapseChange(e) {
    const isOpened = e;
    if (isOpened) {
      this.showLoading();
      try {
        const response = await totalLinksInternet(this.data);
        const data =
          response.data.data.response.ns0totalLinksInternetResponse.return;
        this.setData({ numberLinksInternet: data });
        this.hideLoading();
      } catch (error) {
        this.hideLoading();
      } finally {
        this.hideLoading();
      }
    }
  },
  async handleTelephoneCollapseChange(e) {
    const isOpened = e;
    if (isOpened) {
      this.showLoading();
      try {
        const response = await totalLinksTelephone(this.data);
        const data =
          response.data.data.response.ns0totalLinksTelephoneResponse.return;
        this.setData({ numberLinksTelephone: data });
        this.hideLoading();
      } catch (error) {
        this.hideLoading();
      } finally {
        this.hideLoading();
      }
    }
  },
  handleInputConfirm(e) {},
  async handleInternetTapLink() {
    this.showLoading();
    try {
      const response = await listLinksInternetByAccount(this.data);
      const data = response.data.response;
      this.hideLoading();
      this.setListLinksAndNavigate(data, "modem");
    } catch (error) {
      this.hideLoading();
    } finally {
      this.hideLoading();
    }
  },
  async handleTelephoneTapLink() {
    this.showLoading();
    try {
      const response = await listLinksTelephoneByAccount(this.data);
      const data = response.data.response;
      this.hideLoading();
      this.setListLinksAndNavigate(data, "telephone");
    } catch (error) {
      this.hideLoading();
    } finally {
      this.hideLoading();
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
  showLoading() {
    this.setData({
      showLoading: true,
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false,
    });
  },
});
