Page({

  data: {
    response: {
      "PlanName": "Mi Claro XS PRO Mx",
      "planesRecurrentes": [],
      "datos": "30720",
      "sms": "Ilimitado",
      "voz": "Ilimitado",
      "PlanID": "26311",
      "PlanID_TMCODE": "26311",
      "PlanCode": "4103",
      "PlanDescription": "Mi Claro XS PRO Mx: Cargo Fijo Mensual: $43.900. Incluye: Llamadas ilimitadas a todo destino fijo o movil nacional. SMS Ilimitado a Todo Destino Nacional. Navegacion: 30GB. Incluye acceso gratis a funcionalidades seleccionadas de Whastapp, Facebook, Twitter. Tarifas con impuestos incluidos. No Incluye: Roaming Internacional, LDI, MMS, ni descarga de contenidos con costo. Mayor informacion www.claro.com.co. El prestador del servicio es el operador de telefonia Movil Comcel S.A.",
      "PlanAmount": "$43.900",
      "SocialNetworks": 1,
      "SocialNetworksList": [{
          "SocialNetworkType": "Facebook",
          "icon": "https://apiselfservice.co/archivos/catalogoIcons/facebook.png"
        },
        {
          "SocialNetworkType": "Twitter",
          "icon": "https://apiselfservice.co/archivos/catalogoIcons/twitter.png"
        },
        {
          "SocialNetworkType": "Whatsapp",
          "icon": "https://apiselfservice.co/archivos/catalogoIcons/whatsapp.png"
        },
        {
          "SocialNetworkType": "Claro Video",
          "icon": "https://apiselfservice.co/archivos/catalogoIcons/clarovideo.png"
        }
      ],
      "descripcionSocialNetworkList": "<div style='padding:2% 5%;'><p style='text-align:justify'>El uso de las apps consume datos del plan; una vez consumas tus datos podr\u00e1s seguir usando las apps sin costo adicional hasta tu fecha de corte. No aplica para descarga y actualizaci\u00f3n de las apps, servicios de voz a trav\u00e9s de las apps, carga y descarga de fotos fuera de las apps, redireccionamiento a URLs externas, ni la reproducci\u00f3n de videos alojados en Facebook y Twitter. </p></div></br><br/><br/><div style='padding:2% 5%;'><center><h2>Claro video</h2></center><br/><p style='text-align:justify'>Con tu plan pospago Claro tienes incluida sin costo la suscripci\u00f3n mensual a Claro Video por 12 meses para ver miles de pel\u00edculas y series donde y cuando quieras! <br/> Accede ya a este beneficio registr\u00e1ndote en <a href='https://www.clarovideo.com' target='_blank'>clarovideo.com</a> o descargando la app de Claro Video. <br/>  Puedes contratar por un valor mensual adicional los servicios Premium de HBO , FOX \u00f3 Noggin. La suscripci\u00f3n no incluye pel\u00edculas de alquiler. <br/> El uso de la app Claro video consume datos de tu plan.</p></div></br>",
      "viewMail": 0,
      "PlanVoiceUnit": "Seg",
      "datosCompartidos": "false",
      "familiaYamigos": "false",
      "familiaYamigos2": "0",
      "FrequentNumbersAllowed": {
        "Text": "0",
        "Call": "0",
        "Free": "0"
      },
      "LDI": {
        "descripcion": "",
        "minutos": "0"
      },
      "LDIlist": [],
      "blindaje": {
        "Descripcion": "Beneficio Todo Claro 25GBDescripci\u00f3n de la campa\u00f1a",
        "MBsIncluidos": "25600",
        "MBsConsumidos": "22915.2",
        "fechaActivacion": "2021-11-09T00:00:00-05:00",
        "fechaExpiracion": "2024-12-10T07:08:38-05:00"
      },
      "beneficio": {
        "total": "25,00",
        "disponible": "2,62",
        "consumido": "22,38",
        "nombre": "Beneficio Todo Claro 25GBDescripci\u00f3n de la campa\u00f1a",
        "fechaInicio": "2021-11-09",
        "fechaCorte": "2024-12-10",
        "colorHexa": "#0097ab",
        "colorRGB": {
          "r": "0",
          "g": "151",
          "b": "171"
        }
      },
      "textDatos": "30,00 GB",
      "textBeneficios": "25,00 GB",
      "textTotal": "55 GB",
      "isIlimitado": "false",
      "textTethering": "",
      "CapacityData": ""
    },
    showContent: false,
    iconDefault: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg',

    /*Datos */
    planName: '', //nombre del plan (PlanName)
    planText: '', //cantidad de datos en GB (TextDatos)
    socialNetworks: [], //redes sociales
    /*Voz */
    voiceText: '', //voz
    /*SMS*/
    smsText: '', //sms
    /*descripcion plan*/
    planDescription: '',

  },

  onReady() {

    my.setNavigationBar({
      title: 'Detalle de tu plan',
      backgroundColor: '#4B4B4B',
      textAlign: 'center',
      success() {

      },
      fail() {

      },
    });
  },

  onLoad() {
    this.setData({
      planName: this.data.response.PlanName,
      planText: this.data.response.textDatos,
      socialNetworks: this.data.response.SocialNetworksList.map(social => social.icon),
      voiceText: this.data.response.voz,
      smsText: this.data.response.sms,
      planDescription: this.data.response.PlanDescription
    });
  },

  toggleCollapse: function () {
    this.setData({
      showContent: !this.data.showContent,
      iconDefault: !this.data.showContent ? 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/expand_less/default/48px.svg' : 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/keyboard_arrow_down/default/48px.svg'
    });
  },

  onPayment: function () {
    my.navigateTo({
      url: '/pages/payment/payment?url=https://portalpagos.claro.com.co/index.php?view=vistas/personal/claro/newclaro/inicio.php&id_objeto=#no-back-button'
    })
  }
});