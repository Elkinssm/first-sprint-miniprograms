Component({
  data: {},
  props:{
    data:'',
    style: '',
    sizeImg: '',
    colorImg: '',
    stateImg: 'false',
    srcImg: '',
    underLine: false,
    id: '',
    onTap: () => {}
  },
  didMount() {
    this.$page.hiperlinkButton = this;
  },
  methods: {
    onRedirect(e){
      this.props.onTap(e);
    }
  }
});
