const Client = require("../models/Client.model");
const Project = require("../models/Project.model");

// @desc    Get all projects and clients
// @route   GET api/
exports.getIndex = async (req, res, next) => {
  // Fetch all projects and clients
};

// @desc    Create project
// @route   POST api/project
exports.postProject = async (req, res, next) => {
  // Create project
};

// @desc    Create client
// @route   POST api/client
exports.postClient = async (req, res, next) => {
  // Create client
};

// @desc    Get single project
// @route   GET api/project/:id
exports.getProject = async (req, res, next) => {
  // Fetch single project
};

// @desc    Get single client
// @route   GET api/client/:id
exports.getClient = async (req, res, next) => {
  // Fetch single client
};

// @desc    Delete project
// @route   DELETE api/project/:id
exports.deleteProject = async (req, res, next) => {
  // Delete project with req.params.id
};

// @desc    Delete client
// @route   DELETE api/client/:id
exports.deleteClient = async (req, res, next) => {
  // Delete client with req.params.id
  const { id: _id } = req.params;
  Client.findByIdAndDelete(_id, (err, docs) => {
    if (err) console.log(err);
    else {
      console.log("Deleted :", docs);
      res.json(docs);
    }
  });
};

// @desc    Update project
// @route   PUT api/project/:id
exports.updateProject = async (req, res, next) => {
  // Update project with req.params.id
};

// @desc    Update client
// @route   PUT api/client/:id
exports.updateClient = async (req, res, next) => {
  // Update client with req.params.id
};
