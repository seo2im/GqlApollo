const { Users } = require('./DB/User')

module.exports.resolvers = {
	Query : {
		users : (_, { id }) => {
			return Users.find(user => user.id === id)
		}
	}
}