const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return await User.find();
    },
  },
};

//   Mutation: {
//     addUser: async (parent, { username, email}) => {
//       const user = await User.create({ username, email});
//       return { token, user };
//     },
//   },  
// };

module.exports = resolvers;
