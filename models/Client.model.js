const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("Client", ClientSchema);