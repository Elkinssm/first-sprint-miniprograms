import { validateDate } from "../../../services/validateDate";
import { reconnectionFO } from "../../../services/reconnectionFO";
import { stateFO } from "../../../services/stateFO";

Page({
  data: {
    showLoading: false,
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    linkNumber: "No link number",
    linkCity: "No city",
    infoModalDescription: "",
    showInfoModal: false,
    showErrorModal: false,
    statusOptions: [
      {
        title: "Solicitar Suspensión Temporal",
        onTap: "onSuspension",
      },
      {
        title: "Solicitar Reactivación del Servicio",
        onTap: "onReactivation",
      },
      {
        title: "Consultar Estado de mi Solicitud de Reactivación",
        onTap: "onConsult",
      },
    ],
    linkInformation: {},
  },
  onLoad() {
    this.showLoading();
    const link = my.getStorageSync({ key: "link" }).data;
    const information = my.getStorageSync({ key: "linkInformation" }).data;
    this.setData({
      linkNumber: link.number,
      linkCity: link.serviceDescription,
      linkInformation: information,
    });
  },
  onReady() {
    this.hideLoading();
  },
  async onSuspension() {
    this.showLoading();
    try {
      const response = await validateDate();
      const status = response.data.error;
      this.hideLoading();
      if (status === 0) {
        my.navigateTo({
          url: "/pages/suspension-reactivation/suspension/suspension",
        });
      } else {
        throw new Error(response.data.response);
      }
    } catch (error) {
      this.hideLoading();
      const { message } = error.errorMessage;
      this.setData({
        infoModalDescription: message,
        showInfoModal: true,
      });
    } finally {
      this.hideLoading();
    }
  },
  async onReactivation() {
    this.showLoading();
    try {
      const response = await reconnectionFO(this.data);
      const status = response.data.error;
      this.hideLoading();
      if (status === 0) {
        // ToDo: Change icon for success
        const data = response.data.response.descOperation;
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
  async onConsult() {
    this.showLoading();
    try {
      const response = await stateFO(this.data);
      const status = response.data.error;
      this.hideLoading();
      if (status === 0) {
        const data = response.data.response.descOperation;
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
