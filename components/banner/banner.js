Component({
  props: {
    "img":'',
    "title":'',
    "url": ''
  },
  data:{
    "isActive":false,
  },
  methods:{
    redirectBanner(){
      this.setData({
        isActive:true
      })
    },
    onImageLoaded() {
      this.setData({ imageLoaded: true });
    },
  }
});