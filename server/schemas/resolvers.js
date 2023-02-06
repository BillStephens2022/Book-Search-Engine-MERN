const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // me: User
    },
    Mutation: {
        // addUser
        // login
        // saveBook
        // removeBook
    }
}

module.exports= resolvers;