Page({
  data: {
    cellphone: 3111111111,
    stepIndex: 1,
  },
  handleButton(e) {
    const { step } = e.target.dataset;
    this.setData({ stepIndex: Number(step) });
  },
});
