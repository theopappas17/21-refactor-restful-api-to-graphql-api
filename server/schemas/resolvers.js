const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async () => {return await User.find({})},
  },
};

  Mutation: {
    createUser: async (parent, args) => await User.create(args);
};

module.exports = resolvers;
