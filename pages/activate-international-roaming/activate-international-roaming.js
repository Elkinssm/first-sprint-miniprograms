Page({
  data: {

    roamingActivationOptions:[
      {
        index: 1,
        text:"Activar indefinidamente",
      },
      {
        index: 2,
        text:"Activar con fecha limite"
      }
    ],
    isDatePickerShowed: false,
    fechaLimite: new Date(),

    min: new Date(),
    max: new Date('2050/12/31'),
    defaultDate: new Date('2019/02/02'),
    defaultDateRange: [new Date('2022/03/21'), new Date('2022/05/20')],
    
  },
  onLoad() {
    this.setData(
      {
        fechaLimite: this.formatDate(new Date())
      })
  },
  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleOk(date, format, e) {
    console.log('onOk', date, format, e);
  },
  handlePickerRangeChange(type, date, dateStr, e) {
    console.log('onPickerRangeChange', type, date, dateStr, e);
  },
  handleRangeOk(date, format, e) {
    console.log('onRangeOk', date, format, e);
  },
  handleChangeDate() {
    this.setData({ defaultDate: new Date('2019/05/02') });
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },

  handleDismiss(e) {
    console.log('e', e);
  },
  handleFormatLabel(type, value) {
   
    if(type === 'month') type = "Mes";
    if(type === 'year') type = "Año";
    if(type === 'day') type = "Dia";

   return String(type + " " +value);
  },
  onChangeControlled(value) {
    this.setData({ value });
  },
  onRadioChanged(value) {
    if(value.detail.value === 2){
      this.setData({ isDatePickerShowed: true })
    }else{
      this.setData({ isDatePickerShowed: false })
    }
  },
  formatDate(date) {
    console.log(date);
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  },
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  },
});