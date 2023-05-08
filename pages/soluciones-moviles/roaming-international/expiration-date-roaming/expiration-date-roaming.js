import {
  requestApi
} from "/services/retrieveRoamingService"

Page({
  onLoad(query) {
    /*console.log("query", query);
    this.setData({
      lineNumber: '3103815747'
    });
    requestApi('https://apiselfservice.co/api/index.php/v1/soap/retrieveRoamingService.json', this)
      .then((response) => {
        console.log(response);
      })*/


  },
  data: {
    lineNumber: '',
    roamingActivationOptions: [{
        index: 1,
        text: "Activar indefinidamente",
      },
      {
        index: 2,
        text: "Activar con fecha limite"
      }
    ],
    isDatePickerShowed: false,
    fechaLimite: "indefinida",
    customVisible: false,
    min: new Date(),
    max: new Date('2025/12/31'),
  },

  onRadioChanged(value) {
    this.setData({
      fechaLimite: "indefinida"
    })
    if (value.detail.value === 2) {
      this.setData({
        isDatePickerShowed: true
      })
    } else {
      this.setData({
        isDatePickerShowed: false
      })
    }
  },

  //#region DatePicker
  handleFormatLabel(type, value) {
    if (type === 'month') type = "Mes";
    if (type === 'year') type = "Año";
    if (type === 'day') type = "Dia";
    return String(type + " " + value);
  },
  formatDate(date) {
    console.log(date);
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  },
  handlePickerChange(date, dateStr, e) {
    this.setData({
      fechaLimite: this.formatDate(date)
    })
  },
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  },
  //#endregion


  //#region Modal
  handleOpen(e) {
    const {
      field
    } = e.target.dataset;
    this.setData({
      [field]: true
    });
  },
  handleClose() {
    this.setData({
      basicVisible: false,
      withTitleVisible: false,
      basicTwoVisible: false,
      basicThreeVisible: false,
      focusOneVisible: false,
      focusTwoVisible: false,
      focusThreeVisible: false,
      customVisible: false,
      customBodyVisible: false,
    });
  },
  handlePrimaryButtonTap() {
    this.handleClose();
    my.showToast({
      content: 'Envio de request (en construcción)',
      duration: 4000
    });
  },
  handleSecondaryButtonTap() {
    this.handleClose();
  },
  //#endregion

});