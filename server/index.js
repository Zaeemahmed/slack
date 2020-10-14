const { ApolloServer } = require("apollo-server");
const { Sequelize } = require("sequelize");
const models = require("./models/models");
const { associate } = require("./models/Associate");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const sequelize = new Sequelize("slack", "postgres", "Elpsycongroo69!", {
  host: "localhost",
  dialect: "postgres",
});

models.forEach((model) => model(sequelize));
associate(sequelize);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models: sequelize.models }),
});

sequelize.sync({ force: true }).then(() => {
  server
    .listen()
    .then(({ url }) => console.log(`server listening at ${url}!!!`));
});
