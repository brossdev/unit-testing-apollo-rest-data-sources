const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Dog {
    name: String
    breed: String
  }

  type Query {
    dogs: [Dog]
  }
`;

const dogs = [
  {
    name: "Riley",
    breed: "Cocker Spaniel",
  },
  {
    name: "Opie",
    breed: "Cocker Spaniel",
  },
  {
    name: "Ivy",
    breed: "Jug",
  },
  {
    name: "Lola",
    breed: "Jug",
  },
];

const resolvers = {
  Query: {
    dogs: () => dogs,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
