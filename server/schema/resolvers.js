const resolvers = {
  Query: {
    User: (parent, args, context, info) => {},
  },
  Mutation: {
    createUser: (_, args, { models }) => models.User.create(args),
  },
};

module.exports = { resolvers };
