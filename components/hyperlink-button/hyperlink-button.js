Component({
  data: {},
  props: {
    url: '',
    linkIndex: ''
  },
  didMount() {
    this.$page.hiperlinkButton = this;
  },
  methods: {
    onWebView(e){
      my.navigateTo({
        url: `/pages/solucion/solution-redirect/solution-redirect?url=${this.props.url}`
      });
    }
  }
});
