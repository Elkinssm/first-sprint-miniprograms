Page({
  data: {
    imagesList: [
      {
        imageSrc: "/assets/repetir.png",
        text: "",
        pageUrl: "/pages/test/test"
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
        text: "",
        pageUrl: "/pages/test/test"
      },
      {
        imageSrc: "/assets/repetir2.png",
        text: ""
        // pageUrl: "/pages/test/test"
      },
      {
        imageSrc: "/assets/repetir2.png",
        text: ""
        // pageUrl: "/pages/test/test"
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
        pageUrl: "/pages/soluciones/soluciones"
      },
      {
        iconUrl: "/assets/icons/chat-empresarial.svg",
        text: "Chat",
        pageUrl: "/pages/chatService/chatService"
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
  },
  onImageTopClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.imagesList[index].pageUrl;
    my.navigateTo({ url: pageUrl });
  },
  onImageBottomClick(e) {
    const index = e.target.dataset.index;
    const pageUrl = this.data.imagesBottom[index].pageUrl;
    my.navigateTo({ url: pageUrl });
  }
});
