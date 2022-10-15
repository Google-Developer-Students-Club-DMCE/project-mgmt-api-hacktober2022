const Client = require("../models/Client.model");
const Project = require("../models/Project.model");

// @desc    Get all projects and clients
// @route   GET /
exports.getIndex = async (req, res, next) => {
  // Fetch all projects and clients
};

// @desc    Create project
// @route   POST /project
exports.postProject = async (req, res, next) => {
  // Create project
};

// @desc    Create client
// @route   POST /client
exports.postClient = async (req, res, next) => {
  // Create client
};

// @desc    Get single project
// @route   GET /project/:id
exports.getProject = async (req, res, next) => {
  // Fetch single project
};

// @desc    Get single client
// @route   GET /client/:id
exports.getClient = async (req, res, next) => {
  // Fetch single client
};

// @desc    Delete project
// @route   DELETE /project/:id
exports.deleteProject = async (req, res, next) => {
  // Delete project with req.params.id
};

// @desc    Delete client
// @route   DELETE /client/:id
exports.deleteClient = async (req, res, next) => {
  // Delete client with req.params.id
};

// @desc    Update project
// @route   PUT /project/:id
exports.updateProject = async (req, res, next) => {
  // Update project with req.params.id
};

// @desc    Update client
// @route   PUT /client/:id
exports.updateClient = async (req, res, next) => {
  // Update client with req.params.id
};
