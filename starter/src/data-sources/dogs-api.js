const { RESTDataSource } = require("apollo-datasource-rest");

class DogsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4001/";
  }

  async getAllDogs() {
    return this.get(`dogs/`);
  }

  async getDog(id) {
    return this.get(`dogs/${id}`);
  }
}

module.exports = DogsAPI;
