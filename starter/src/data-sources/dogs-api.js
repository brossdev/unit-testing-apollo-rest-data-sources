const { RESTDataSource } = require("apollo-datasource-rest");

class DogsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://localhost:4001";
  }

  async getAllDogs(id) {
    return this.get(`dogs/${id}`);
  }

  async getDog(id) {
    return this.get(`dogs/${id}`);
  }
}

module.exports = DogsAPI;
