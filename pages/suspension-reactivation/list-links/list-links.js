import { searchLinkInternet } from "../../../services/searchLinkInternet";
import { searchLinkTelephone } from "../../../services/searchLinkTelephone";

Page({
  data: {
    LINK_TYPES: { MODEM: "modem", TELEPHONE: "telephone" },
    enterpriseName: "No enterprise",
    enterpriseNumber: "No number",
    accountNumber: "127053",
    city: "No city",
    code: "No code",
    linkType: "",
    link: { number: "", serviceDescription: "" },
    listLinks: [],
  },
  onLoad(options) {
    const dispositiveType = options.dispositiveType;
    this.setData({
      linkType: dispositiveType,
    });
    const listLinks = my.getStorageSync({ key: "listLinks" }).data;
    this.setData({
      listLinks: listLinks,
    });
  },
  async handleLink(e) {
    const { number } = e.target.dataset;
    const { serviceDescription } = e.target.dataset;
    let response = null;
    let data = null;
    try {
      if (this.data.linkType === this.data.LINK_TYPES.MODEM) {
        response = await searchLinkInternet(this.data);
        data = response.data.response;
      } else if (this.data.linkType === this.data.LINK_TYPES.TELEPHONE) {
        response = await searchLinkTelephone(this.data);
        data = response.data.response;
      }
      this.setLinkAndNavigate(
        {
          number: number,
          serviceDescription: serviceDescription,
        },
        data
      );
    } catch (error) {
      console.log(error);
    }
  },
  setLinkAndNavigate(link, data) {
    my.setStorageSync({
      key: "link",
      data: link,
    });
    my.setStorageSync({
      key: "linkInformation",
      data: data,
    });

    my.navigateTo({
      url: `/pages/suspension-reactivation/suspension-reactivation-consult/suspension-reactivation-consult`,
    });
  },
});
