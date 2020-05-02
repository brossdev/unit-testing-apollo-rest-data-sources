const { ApolloServer, gql } = require("apollo-server");
const DogsAPI = require("./data-sources/dogs-api");
const CatsAPI = require("./data-sources/cats-api");

const typeDefs = gql`
  type Dog {
    name: String
    breed: String
  }

  type Cat {
    name: String
    breed: String
  }

  type Query {
    dogs: [Dog]
    cats: [Cat]
  }
`;

const resolvers = {
  Query: {
    dogs: async (_source, _args, { dataSources }) => {
      return await dataSources.dogsAPI.getAllDogs();
    },
    cats: async (_source, _args, { dataSources }) => {
      return await dataSources.catsAPI.getAllCats();
    },
  },
};

const dataSources = () => ({
  dogsAPI: new DogsAPI(),
  catsAPI: new CatsAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
