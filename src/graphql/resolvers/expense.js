const { Expense, Account } = require('../../schema')

module.exports = {
   Query: {
        accounts: (root, args, context, info) => {
              return Account.find({})
        },
        account: (root, args) => {
              return Account.findOne(args)
        }
    },
    Mutation: {
         addAccount(_, args) {
             let data = args
             return Account.create(data)
         }
    }
}