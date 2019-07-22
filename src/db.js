const mongoose = require("mongoose");
const { DB_URL } = require("config");
mongoose.Promise = global.Promise; // Use native promises

module.exports = {
  connect,
  close,
  ObjectId: mongoose.Types.ObjectId
};

async function connect() {
  try {
    let ret = await mongoose.connect(DB_URL, {
      useNewUrlParser: true
    });
  } catch (e) {}
}
async function close() {
  try {
    mongoose.connection.close(function() {
      console.log("Mongoose connection closed");
    });
  } catch (e) {}
}
