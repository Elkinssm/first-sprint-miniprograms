import { consultFO } from "../../../services/consultFO";
import { suspensionFO } from "../../../services/suspensionFO";

Page({
  data: {
    showLoading: false,
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    linkNumber: "",
    infoModalDescription: "",
    suspendModalDescription: "",
    showInfoModal: false,
    showErrorModal: false,
    showSuspendModal: false,
    suspensionDaysOptions: [
      { value: "30", label: "30 días" },
      { value: "60", label: "60 días" },
    ],
    suspensionDays: "",
  },
  onLoad() {
    this.showLoading();
    const link = my.getStorageSync({ key: "link" }).data;
    this.setData({
      linkNumber: link.number,
    });
  },
  onReady() {
    this.hideLoading();
  },
  onSuspensionDaysChange(e) {
    const { value } = e.detail;
    this.setData({
      suspensionDays: value,
    });
  },
  async onButtonTap() {
    this.showLoading();
    try {
      const response = await consultFO(this.data);
      const status = response.data.error;
      this.hideLoading();
      if (status === 0) {
        const data = response.data.response.descValidation;
        this.setData({ suspendModalDescription: data, showSuspendModal: true });
      } else if (status === 1) {
        const data = response.data.response;
        this.setData({ infoModalDescription: data, showInfoModal: true });
      } else {
        throw new Error(response.data.response);
      }
    } catch (error) {
      this.hideLoading();
      this.setData({ showErrorModal: true });
    } finally {
      this.hideLoading();
    }
  },
  onAcceptInfoModal() {
    this.setData({
      showInfoModal: false,
    });
  },
  onAcceptErrorModal() {
    this.onHideErrorModal();
    my.navigateTo({
      url: "/pages/suspension-reactivation/support/support",
    });
  },
  onHideErrorModal() {
    this.setData({
      showErrorModal: false,
    });
  },
  async onAcceptSuspendModal() {
    this.showLoading();
    try {
      const response = await suspensionFO(this.data);
      const status = response.data.error;
      this.hideLoading();
      if (status === 0) {
        const data = response.data.response.descOperation;
        // ToDo: Change modal with more information
        this.setData({ infoModalDescription: data, showInfoModal: true });
      } else if (status === 1) {
        const data = response.data.response;
        this.setData({ infoModalDescription: data, showInfoModal: true });
      } else {
        throw new Error(response.data.response);
      }
    } catch (error) {
      this.hideLoading();
      this.setData({ showErrorModal: true });
    } finally {
      this.hideLoading();
    }
  },
  onHideSuspendModal() {
    this.setData({
      showSuspendModal: false,
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
