Component({
  data: {
    state: false
  },
  props: {
    url: '',
    linkIndex: ''
  },
  didMount() {
    this.$page.hiperlinkButton = this;
  },
  methods: {
    onWebView(e){
      this.setData({
        state: true
      }); 
    }
  }
});
