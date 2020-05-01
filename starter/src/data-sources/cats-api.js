const { RESTDataSource } = require("apollo-datasource-rest");

class CatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://localhost:4002/";
  }

  async getAllCats(id) {
    return this.get(`cats/${id}`);
  }

  async getCat(id) {
    return this.get(`cats/${id}`);
  }
}

module.exports = CatsAPI;
