const { default: axios } = require("axios");

class Github {
  static cache={};
  static usercache={};
  constructor() {
    this.address = process.env.GITHUB_ADRESS;
    this.headers = {
      accept: "application/vnd.github+json",
    };
  }
  async getUsers(since) {
    const result = await  axios.get(`${this.address}?since=${since}`, {
      headers: this.headers,
    });
    const {
      data,
      headers: { link },
    } = result;
    return {
      data,
      links: this.parseLink(link),
    };
  }

  parseLink(link) {
    const removeExtra = (link) =>
      link.split(";")[0].replace(">", "").replace("<", "").replace(";", "");
    let nextPage = removeExtra(link.split(",")[0]);
    nextPage = nextPage.substr(nextPage.lastIndexOf("=")+1)
    return {
      nextPage,
    };
  }
  async getUserDetails(username) {
    const result = await axios.get(`${this.address}/${username}`, {
      headers: this.headers,
    });
    return result.data;
  }
  async getUserRepository(username) {
    const result = await axios.get(`${this.address}/${username}/repos`, {
      headers: this.headers,
    });
    return result.data;
  }
}
module.exports = Github;
