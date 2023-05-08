Page({
  data: {
    lineNumber:getApp().globalData.lineNumber,
    roamingService: [
      {
        name: "Consulta tus consumos",
        img: '/assets/icons/usage_black.svg',
        url: '/pages/test/test'
      },
      {
        name: "Detalle de tu plan",
        img: '/assets/icons/detail_black.svg',
        url: '/pages/test/test'
      },
      {
        name: "Administrar paquetes",
        img: '/assets/icons/package_black.svg',
        url: '/pages/test/test'
      },
      {
        name: "Transacciones en línea",
        img: '/assets/icons/transactions_black.svg',
        url: '/pages/test/test'
      },
      {
        name: "Roaming Internacional",
        img: '/assets/icons/roaming_black.svg',
        url: '/pages/soluciones-moviles/roaming-international/roaming-international'
      },
      {
        name: "Inicio",
        img: '/assets/icons/inicio_black.svg',
        url: '/pages/test/test'
      }
    ]

  },
  onLoad(query) {
    my.setNavigationBar({
      title: 'Mi Claro'
    });
  },
  onNavigate(e) {
    const url = e.currentTarget.dataset.item.url;
    my.navigateTo({
      url: `${url}`
    });
  }
});
