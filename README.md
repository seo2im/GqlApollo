# Grape QL / Apollo

## What is GraphQL

GraphQL(GQL) is query string made by facebook. This time, It is cleary early-stage framework. But it is good for any server side service.

GQL's object is that client get data from server efficiently.

When GQL server get query from client, send result of processed by query through http POST.

### Data Schema of GQL
Schema is smillar of typescript's interface or type declaration, also like c, c++ header.

```javascript
/* Schema in apollo*/
const typeDefs = gql`
	# This data schema
	type Book {
    	title: String
    	author: String
	}
	# This data query
	type Query {
		books: [Book]
	}
`
/* Real data declaration */
const books = [
	{
		title : 'The Awakening',
		author : 'Kate Chopin'
	},
	{
		title : 'City of Glass',
		author : 'Paul Auster'
	}
]
```

### Resolver
GQL have to define resolver, contain specific process of getting datas.

```javascript
/* resolver in apollo */
const resolvers = {
	Query : {
		books : () => books
	}
}
```

### Query of GQL
Query is perfectly intuitive. just shot data names, get datas, no use complex method.

```javascript 
/* Query */
query Query{
	books {
		author
	}
}
/* get data */
{
  "data": {
    "books": [
      {
        "author": "Kate Chopin"
      },
      {
        "author": "Paul Auster"
      }
    ]
  }
}
```

### vs Rest API

Rest API has a lot of endpoints for method combinations. But GQL only use query for getting data. So, GQL query is dependcy of its schema.
