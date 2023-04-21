Page({
  data: {
    nodes: [
      {
        name: "span",
        attrs: {
          style: "color: #DB493E; font-weight: bold; font-size: 0.48rem;"
        },
        children: [
          {
            type: "text",
            text: "Trámites"
          }
        ]
      },
      {
        name: "span",
        attrs: {
          style: "color: #4e4e4e; font-weight: bold; font-size: 0.48rem;"
        },
        children: [
          {
            type: "text",
            text: " para tu empresa"
          }
        ]
      }
    ],
    proceduresMenu: [
      {
        id: "contract",
        iconUrl: "/assets/icons/request-page.svg",
        text: "Cesión de contrato"
      },
      {
        id: "plan",
        iconUrl: "/assets/icons/change-plan.svg",
        text: "Cambio de plan"
      },
      {
        id: "transfer",
        iconUrl: "/assets/icons/move.svg",
        text: "Traslados"
      },
      {
        id: "sim",
        iconUrl: "/assets/icons/sim-card.svg",
        text: "Cambio de SIM card"
      }
    ]
  },
  goToPage(e) {
    const navigates = {
      contract: () =>
        my.navigateTo({
          url: "/pages/contract-assignment/contract-assignment"
        }),
      plan: () =>
        my.navigateTo({ url: "/pages/plan-management/plan-management" }),
      transfer: () => my.navigateTo({ url: "/pages/transfer/transfer" }),
      sim: () => my.navigateTo({ url: "/pages/sim-management/sim-management" })
    };
    const pageName = e.id;
    return navigates[pageName]();
  },
  onShareAppMessage() {
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  }
});
