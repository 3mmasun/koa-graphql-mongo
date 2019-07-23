const Koa = require("koa");

const { ApolloServer, gql } = require("apollo-server-koa");
const typeDefs = gql(require("./graphql/typeDefs"));
const resolvers = require("./graphql/resolvers");

const db = require("./db");

const app = new Koa();
const path = "/mygraphql";
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app , path });

module.exports = {
  run: async port => {
    await app.listen(port);
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    await db.connect();
  },
  app
};
