Page({
  data: {
    showWebView: false,
    webViewUrl: "",
    transferList: [
      {
        text: "Debes confirmar la dirección completa y exacta del nuevo sitio."
      },
      {
        text:
          "Si es un edificio debes contar con los permisos de administración requeridos."
      },
      {
        text: "No debes tener mora en tu factura mayor a 60 días."
      },
      {
        text:
          "El traslado se puede realizar a cualquier destino a nivel nacional previa validación de cobertura."
      },
      {
        text:
          "Durante este proceso es posible que se generen costos de Obra civil, estos pueden variar y se cargarán en tu siguiente factura."
      },
      {
        text: "Aplican condiciones y restricciones."
      }
    ]
  },
  /**
   * ToDo: Question that! A method to open the default email app.
   */
  goToMailApp() {
    my.navigateToMiniProgram({
      appId: "20000067",
      path:
        "mailto:contactopyme.co@claro.com.co?subject=My%20subject&body=This%20is%20the%20body%20of%20the%20email",
      success: res => {},
      fail: res => {}
    });
  },
  handleCustomButtonTap() {
    this.setData({
      showWebView: true,
      webViewUrl: "https://www.claro.com.co/personas/cavs/"
    });
  }
});
