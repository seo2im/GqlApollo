const { gql } = require('apollo-server')

module.exports.typeDefs = gql`
	type Category {
		id : Int!
		name : String!
	}

	type Todo {
		catId : Int!
		id : Int!
		name : String!
		state : Boolean!
	}

	type Record {
		catId : Int!
		id : Int!
		date : String!
		name : String!
		content : String
	}

	type User {
		Id : Int!
		name : String!
		categories : [Category]
		todos : [Todo]
		records : [Record]
	}

	type Query {
		users(id : Int!) : User
	}
`

