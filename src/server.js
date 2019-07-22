const Koa = require("koa");
const Router = require("koa-router");

const { ApolloServer, gql } = require("apollo-server-koa");
const typeDefs = gql(require('./graphql/typeDefs'))
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();
const db = require("./db")

server.applyMiddleware({ app });

const router = new Router();

router.get("/", (ctx, next) => {
  // ctx.router available
});

app.use(router.routes());

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
