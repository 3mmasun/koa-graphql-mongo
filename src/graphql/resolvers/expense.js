const { Expense, Account } = require("../../schema");

module.exports = {
  Query: {
    expenses: (root, args, context, info) => {
      return Expense.find({});
    },
    expense: (root, args) => {
      return Expense.findOne(args);
    }
  },
  Mutation: {
    addExpense(_, args) {
      let data = args;
      return Expense.create(data);
    }
  }
};
