var urlchat = getApp();
Page({
  data:{
    sChat:false,
    urlCaht: urlchat.globalData.urlServiceChat
  },

  onLoad(query) {
    
  },

 serviceChat: function(e){
   this.setData({sChat:true});
   console.log(this.data.urlCaht)
 }

});
