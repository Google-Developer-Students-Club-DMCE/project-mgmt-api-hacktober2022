const path = require("path");
const fs = require("fs");

require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
const clients = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "clients.json"))
);
const projects = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "projects.json"))
);

const Client = require("./models/Client.model");
const Project = require("./models/Project.model");

const importData = async () => {
  try {
    await Client.create(clients);
    await Project.create(projects);
    console.log("Data imported ✅");
  } catch (err) {
    if(err.code==11000){
        console.log(`Already data exists. First empty the database!\nrun: node seeder.js -d \nto delete db`)
    }else{
        console.error(err);
    }
  }
  process.exit(0);
};

const deleteData = async () => {
  try {
    await Client.deleteMany();
    await Project.deleteMany();
    console.log("Data deleted ❌");
  } catch (error) {
    console.error(error);
  }
  process.exit(0);
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
