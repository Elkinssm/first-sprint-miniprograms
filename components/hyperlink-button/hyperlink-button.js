Component({
  data: {},
  props: {
    url: '',
    color: '',
    stateImg: '',
    srcImg: '',
    under_line: false,
    id: ''
  },
  didMount() {
    this.$page.hiperlinkButton = this;
  },
  methods: {
    onWebView(e){
      my.navigateTo({
        url: `/pages/solucion/solution-redirection/solution-redirection?url=${this.props.url}?id=${this.props.id}`
      });
    }
  }
});
