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
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/pagos.svg",
        text: "Pagos en línea",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/portafolio.svg",
        text: "Portafolio de Soluciones",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/tramites.svg",
        text: "Información de tramites",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/chat-empresarial.svg",
        text: "Chat empresarial",
        pageUrl: "/pages/chatService/chatService"
      },
      {
        iconUrl: "/assets/icons/start.svg",
        text: "Guía y novedades",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/devices.svg",
        text: "Devolución de equipos",
        pageUrl: "/pages/test/test"
      }
    ]
  },
  onLoad() {},
  onIconClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.access[index].pageUrl;
    my.navigateTo({ url: pageUrl });
  }
});
