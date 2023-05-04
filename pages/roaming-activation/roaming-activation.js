Page({
  data: {
    cellphone: 3111111111,
    stepIndex: 1,
    paises: ["Argentina", "Chile", "Colombia", "México", "Perú", "Uruguay"],
    selectedCountries: [],
    numberOfAvailableCountries: 5,
    textNotFindCountry:
      "Si no encuentras tu país destino favor comunícate al *611, O si estás por fuera de Colombia al + 57 320 999 9999",
    packageTypes: [
      {
        iconUrl: "/assets/icons/bundle.svg",
        title: "Paquetes Bundle",
        subtitle: "Paquetes de datos y voz",
        packageType: "bundle",
      },
      {
        iconUrl: "/assets/icons/bundle.svg",
        title: "Paquetes de datos",
        subtitle: "Paquetes de datos",
        packageType: "datos",
      },
      {
        iconUrl: "/assets/icons/bundle.svg",
        title: "Paquetes voz",
        subtitle: "Paquetes de voz",
        packageType: "voz",
      },
    ],
    selectedPackage: "",
  },
  handleButton(e) {
    console.log(e);
    const { step } = e.target.dataset;
    this.setData({ stepIndex: Number(step) });
  },

  onPickerChange: function (e) {
    const { value } = e.detail;
    console.log(e);
    const country = this.data.paises[value];
    const addedCountry = this.data.selectedCountries.concat(country);
    this.setData({
      selectedCountries: addedCountry,
    });
  },
  continue: function (e) {
    const nextStep = this.data.stepIndex + 1;
    e.target.dataset.step = nextStep;
    console.log(e.target.dataset.step);
    if (this.data.selectedCountries.length === 0) {
      my.alert({
        title: "Debe seleccionar al menos 1 pais",
        icon: "none",
      });
    } else {
      this.setData({
        stepIndex: nextStep,
      });
      this.handleButton(e);
    }
  },
  handlePackageButton(e) {
    const { packageType } = e.target.dataset;
    this.setData({
      selectedPackage: packageType,
    });
  },
});
