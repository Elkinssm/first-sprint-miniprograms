Page({
  data: {},
  onLoad() {
    const { titleBarHeight, statusBarHeight } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,
    });
    my.setNavigationBar({
      title: "",
    });
  },
  /**
   * Navigates to a specific page in the application.
   */
  onNavigate() {
    my.navigateTo({
      url: "/main/ui/returnOfEquipment/returnOfEquipment",
    });
  },
});
