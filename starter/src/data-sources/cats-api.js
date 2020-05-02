const { RESTDataSource } = require("apollo-datasource-rest");

class CatsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4002/";
  }

  async getAllCats() {
    return this.get(`cats/`);
  }

  async getCat(id) {
    return this.get(`cats/${id}`);
  }
}

module.exports = CatsAPI;
