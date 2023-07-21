Page({
  data: {},
  onLoad() {
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
    my.setNavigationBar({
      title: ""
    });
  },
  onNavigate() {
    my.navigateTo({
      url: '/main/ui/returnOfEquipment/returnOfEquipment'
    })
  },
});
