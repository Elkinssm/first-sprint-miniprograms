Page({
  data: {
    imagesList: [
      {
        imageSrc: "/assets/repetir.png",
        text: ""
        // pageUrl: "/pages/test/test"
      },
      {
        imageSrc: "/assets/repetir.png",
        text: " "
        // pageUrl: "/pages/test/test"
      },
      {
        imageSrc: "/assets/repetir.png",
        text: ""
        // pageUrl: "/pages/test/test"
      }
    ],
    imagesBottom: [
      {
        imageSrc: "/assets/repetir2.png",
        text: ""
        // pageUrl: "/pages/cesion-de-contrato/cesion-de-contrato"
      },
      {
        imageSrc: "/assets/repetir2.png",
        text: ""
        // pageUrl: "/pages/cambio-de-plan/cambio-de-plan"
      },
      {
        imageSrc: "/assets/repetir2.png",
        text: ""
        // pageUrl: "/pages/translados/translados"
      }
    ],
    access: [
      {
        iconUrl: "/assets/icons/pagos.svg",
        text: "Pagos\n en línea",
        pageUrl: "/pages/onlinePayments/onlinePayments"
      },
      {
        iconUrl: "/assets/icons/portafolio.svg",
        text: "Portafolio\n de Soluciones",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/chat-empresarial.svg",
        text: "Chat",
        pageUrl: "/pages/test/test"
      },
      {
        iconUrl: "/assets/icons/ver-mas.svg",
        text: "Ver\n más",
        pageUrl: "/pages/zona-publica/zona-publica"
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
