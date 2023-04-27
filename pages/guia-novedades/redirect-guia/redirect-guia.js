Page({
  data: {
    url:''
  },
  onLoad(options) {
    var url='';
if (typeof options.url === 'string') {
    url=options.url;
}else {
    url= options.url.join("&url=");
  }
    this.setData({
      url:url
    })
  }
});
