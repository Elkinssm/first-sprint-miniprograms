Page({

  data: {
    showContent: false,
    iconDefault: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg',
    planDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

  toggleCollapse: function () {
    this.setData({
      showContent: !this.data.showContent,
      iconDefault: !this.data.showContent ? 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/expand_less/default/48px.svg' : 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg'
    });
  }
});