const { Expense, Account } = require('../../schema')

module.exports = {
    Account: {
       expenses: (account) => Expense.find({ accountId: account._id })
    },
    Query: {
       accounts: (root, args, context, info) => {
           return Account.find({})
       },
       account: (root, args) => {
           return Account.findOne(args)
       }
     },
     Mutation: {
        async addAccount(_, args, ctx, info) {
           let data = args
           let account = await Account.findOne({ name: data.name })
           if (account) return new Error('account exists')
           return Account.create(data)
       }
    }
}
