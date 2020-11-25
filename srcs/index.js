const { ApolloServer } = require('apollo-server')
const { resolvers } = require('./Resolver');
const { typeDefs } = require('./Schema');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})