Page({
  data: {
    video: {
      src: 'https://youtu.be/4G2Nv_aUOvg',
      showAllControls: true,
      showPlayButton: true,
      showCenterButton: true,
      showFullScreenButton: true,
      isLooping: false,
      muteWhenPlaying: false,
      initTime : 0 , 
      objectFit: 'contains',
      autoPlay: false,
      directionWhenFullScreen: 90,
      mobilenetHintType: 2
    },
    dataSolutions: [],
    positionData: 1,
    stateBefore: true,
    stateNext: true,
    scrollAnimation: false
  },
  onLoad(query) {
    this.setInformation(query.data, query.id);
    this.onButtonStatusChange();
  },
  setInformation(data, id) {
    my.showLoading({content: "Loading Data..."});
    this.setData({
      dataSolutions: JSON.parse(data),
      positionData: id
    });
    my.hideLoading({});
  },
  onBefore: function (e) {
    const data = this.data.dataSolutions;
    const actual = this.data.positionData;
    const index = data.findIndex(element => element.idVideo == actual);
    if (index !== -1 && index > 0) {
      const prevId = data[index - 1].idVideo;
      my.setNavigationBar({
        title: data[index - 1].nombre
      });
      const stateBefore = index == 1 ? false : true;
      this.setData({
        positionData: prevId,
        stateBefore: stateBefore,
        stateNext: true,
        scrollAnimation: true
      });
    }
  },
  onNext: function (e) {
    const data = this.data.dataSolutions;
    const actual = this.data.positionData;
    const index = data.findIndex(element => element.idVideo == actual);
    if (index !== -1 && index < data.length - 1) {
      const nextId = data[index + 1].idVideo;
      my.setNavigationBar({
        title: data[index + 1].nombre
      });
      const stateNext = (index + 1) == data.length - 1 ? false : true;
      this.setData({
        positionData: nextId,
        stateNext: stateNext,
        stateBefore: true,
        scrollAnimation: true
      });
    }
  },
  onButtonStatusChange() {
    const data = this.data.dataSolutions;
    const actual = this.data.positionData;
    const index = data.findIndex(element => element.idVideo == actual);
    my.setNavigationBar({
       title: data[index].nombre
    });
    if (index == 0) {
      this.setData({
        stateBefore: false,
        stateNext: true
      });
    }
    if (index == data.length - 1) {
      this.setData({
        stateNext: false,
        stateBefore: true
      });
    }
  },
  onRedirect(e){
    my.navigateTo({
      url: "/pages/adquirir-producto/adquirir-producto"
    })
  }
});