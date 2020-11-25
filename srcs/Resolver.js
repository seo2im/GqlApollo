import { UserData } from './DB/UserData'
import { Users } from './DB/Users'

export const resolvers = {
	Query : {
		userData : (_, { id }) => {
			return UserData.find(user => user.id === id)
		}
	},

	Mutation : {
		addUsers : (_, { name }) => {
			return [...Users, {id : Users.length, name : name}]
		}
	}
}