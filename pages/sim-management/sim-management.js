Page({
  data: {
    showCentrosAtencionPage: false,
    changeSimList: [
      {
        text:
          "Si tu empresa es atendida por un asesor de servicio, te invitamos a que te comuniques con él."
      },
      {
        text:
          "Si cuentas con Portal Empresarial, podrás solicitar SIM Card Back up (recuerda que el pedido mínimo para envío es de 5 SIM card en adelante)."
      },
      {
        text:
          "Si Cuentas con SIM card Back up, podrás gestionar el cambio a través del Portal Empresarial."
      },
      {
        text:
          "Si eres el representante legal, puedes dirigirte con tu cámara de comercio original y vigente(no menor a 60 días) y tu cédula al Centro de Atención y Ventas más cercano."
      },
      {
        text:
          "Si eres un tercero autorizado debes presentar el poder autenticado en una notaría, en donde se relacione(n) la(s) línea(s) a la(s) que deseas hacer el cambio de SIM card, nombre y cédula de quien lo va a realizar, fotocopia legible del representante legal y cédula original de quien hace el trámite."
      }
    ]
  },
  handleCustomButtonTap() {
    this.setData({ showCentrosAtencionPage: true });
  }
});
