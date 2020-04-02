require("moment/locale/pt");
const moment = require("moment");

module.exports = {
  formatDate: (date) => {
    return moment(date).locale("pt").format("D [de] MMMM [de] YYYY, HH:mm");
  },
};
