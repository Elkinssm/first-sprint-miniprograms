Component({
  mixins: [],
  data: {
    value: null,
  },
  props: {
    className: null,
    style: null,
    headerClassName: null,
    contentClassName: null,
    headerStyle: null,
    contentStyle: null,
    footerClassName: null,
    footerStyle: null,
    iconTitleUrl: "No icon",
    title: "No title",
    contentTitle: "No content title",
    contentLinkText: "No content link text",
    contentLinkTotal: null,
    placeholder: "No placeholder",
    onCollapseChange: () => {},
    onInputChange: () => {},
    onInputConfirm: () => {},
    onTapLink: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onCollapseChange(e) {
      return !e.length
        ? this.props.onCollapseChange(false)
        : this.props.onCollapseChange(true);
    },
    onChange(value, e) {
      this.setData({ value: value });
      return this.props.onInputChange(value, e);
    },
    onConfirm() {
      return this.props.onInputConfirm(this.data.value);
    },
    onTapLink() {
      return this.props.onTapLink();
    },
  },
});
