Component({
  data: {},
  props:{
    url: '',
    style: '',
    sizeImg: '',
    colorImg: '',
    stateImg: 'false',
    srcImg: '',
    underLine: false,
    id: ''
  },
  didMount() {
    this.$page.hiperlinkButton = this;
  },
  methods: {
    onWebView(e){
      my.navigateTo({
        url: `/pages/web-view/web-view?url=${this.props.url}?id=${this.props.id}`
      });
    }
  }
});
