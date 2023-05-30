Page({
  data: {
    access: [
      {
        iconUrl: "/assets/icons/consumos.svg",
        text: "Consulta tus consumos",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/paquetes.svg",
        text: "Compra de paquetes",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/detalle.svg",
        text: "Detalle de tu plan",
        pageUrl: "/pages/plan-detail/plan-detail"
      },
      {
        iconUrl: "/assets/icons/pagos.svg",
        text: "Pagos en línea",
        pageUrl: "/pages/onlinePayments/onlinePayments"
      },
      {
        iconUrl: "/assets/icons/portafolio.svg",
        text: "Portafolio de Soluciones",
        pageUrl: "/pages/soluciones/soluciones"
      },
      {
        iconUrl: "/assets/icons/tramites.svg",
        text: "Información de tramites",
        pageUrl: "/pages/procedure-information/procedure-information"
      },
      {
        iconUrl: "/assets/icons/chat-empresarial.svg",
        text: "Chat empresarial",
        pageUrl: "/pages/chatService/chatService"
      },
      {
        iconUrl: "/assets/icons/start.svg",
        text: "Guía y novedades",
        pageUrl: "/pages/guia-novedades/guia-novedades"
      },
      {
        iconUrl: "/assets/icons/devices.svg",
        text: "Devolución de equipos",
        pageUrl: "/pages/returnOfEquipment/returnOfEquipment"
      },
      {
        iconUrl: "/assets/icons/devices.svg",
        text: "Soluciones Moviles",
        pageUrl: "/pages/soluciones-moviles/soluciones-moviles"
      }
    ]
  },
  onLoad() {},
  onIconClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.access[index].pageUrl;
    my.navigateTo({ url: pageUrl });
  },

   onProductsClick(e) {
    const pageUrl = "/pages/test/test";
    my.navigateTo({ url: pageUrl });
  }
});
