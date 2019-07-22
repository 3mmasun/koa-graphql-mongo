const db = require("../src/db");
const { Expense, Account } = require("../src/schema");

async function run() {
  await db.connect();
  await db.accounts.drop();
  let accounts = await Account.insertMany([
    {
      name: "Household"
    },
    {
      name: "Personal"
    }
  ]);
  await db.expenses.drop();
  let expenses = await Expense.insertMany([
    {
      name: "marketing",
      description: "vegetable and fruits",
      amount: 20.4,
      accountId: accounts[0]._id
    },
    {
      name: "NTUC",
      description: "bread and milk",
      amount: 15,
      accountId: accounts[0]._id
    },
    {
      name: "Taxi",
      description: "office to home",
      amount: 6.5,
      accountId: accounts[1]._id
    }
  ]);
  db.close();
}

run();
