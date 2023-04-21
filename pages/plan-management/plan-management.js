Page({
  data: {
    showMiClaroPortalPage: false,
    showECarePortalPage: false,
    showClaroCloudPage: false,
    showCentrosAtencionPage: false
  },
  goToExternalPage(e) {
    const { link } = e.target.dataset;
    const externalPages = {
      miClaroPortal: () => this.setData({ showMiClaroPortalPage: true }),
      eCarePortal: () => this.setData({ showECarePortalPage: true }),
      claroCloud: () => this.setData({ showClaroCloudPage: true })
    };
    return externalPages[link]();
  },
  handleCustomButtonTap() {
    this.setData({ showCentrosAtencionPage: true });
  }
});
