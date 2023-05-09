Page({
  data: {
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    linkNumber: "No link number",
    linkCity: "No city",
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
    const link = my.getStorageSync({ key: "link" }).data;
    const information = my.getStorageSync({ key: "linkInformation" }).data;
    this.setData({
      linkNumber: link.number,
      linkCity: link.serviceDescription,
      linkInformation: information,
    });
  },
  onSuspension() {},
  onReactivation() {},
  onConsult() {},
});
