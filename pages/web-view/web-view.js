Page({
  data: {
    url: '',
    id: ''
  },
  onLoad(query) {
    this.setData({
      url: query.url,
      linkIndex: query.id
    });
  },
});
