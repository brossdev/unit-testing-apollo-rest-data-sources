const { ApolloServer, gql } = require("apollo-server");
const DogsAPI = require("./data-sources/dogs-api");

const typeDefs = gql`
  type Dog {
    name: String
    breed: String
  }

  type Query {
    dogs: [Dog]
  }
`;

const resolvers = {
  Query: {
    dogs: async (_source, _args, { dataSources }) => {
      return await dataSources.dogsAPI.getAllDogs();
    },
  },
};

const dataSources = () => ({
  dogsAPI: new DogsAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
