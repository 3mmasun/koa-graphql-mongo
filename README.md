## Docker with Mongo
### Creat Docker Containter
```
docker run --name koa-apollo-mongo -d -p 27017:27017 mongo
```
### Start Docker Process
```
docker start koa-apollo-mongo
```
### Interacting with the MongoDB Docker Container
```
docker exec -it koa-apollo-mongo bash
```
To launch MongoDB shell
```
mongo
show dbs
use cashflow_db // switch db
show collections // display collections
db.expenses.drop() // drop a collection
```
## Start Application
```
npm i
npm run dev
```
## Query GraphQL
visit http://localhost:3000/graphql
```
query{
  accounts{
    name
    expenses{
      name
      description
      amount
    }
  }
}
```
expected result
```
{
  "data": {
    "accounts": [
      {
        "name": "Household",
        "expenses": [
          {
            "name": "marketing",
            "description": "vegetable and fruits",
            "amount": 20.4
          },
          {
            "name": "NTUC",
            "description": "bread and milk",
            "amount": 15
          }
        ]
      },
      {
        "name": "Personal",
        "expenses": [
          {
            "name": "Taxi",
            "description": "office to home",
            "amount": 6.5
          }
        ]
      }
    ]
  }
}
```