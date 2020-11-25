import { ApolloServer } from 'apollo-server'
import { resolvers } from './Resolver'
import { typeDefs } from './Schema'

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})