Component({
  data: {},
  props: {
    stateImg: 'false',
    imgSrc: '',
    iconArrowSrc: '',
    style: '',
    dataInfo: '',
    onTap: () => {}
  },
  didMount() {
    this.$page.arrowButton = this;
  },
  methods: {
    onNav(e){
      this.props.onTap(e);
    }
  }
});
