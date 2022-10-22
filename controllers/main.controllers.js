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
  try {
    let projectObj = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      clientId: req.body.clientId
    }
    const project = await Project.create(projectObj);
    res.status(200).json({ success: true, message: "project created successfully", project: project });
  }
  catch {
    res.status(400).json({ success: false, message: "some error occured" });
  }
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
  try {
    const { id: _id } = req.params;
    const docs = await Project.findByIdAndDelete(_id);
    if(docs != null) res.status(200).json({success: true, data: docs});
    else {
      res.status(404).json({success: false, error: "Project Not Found"});
    }
  } catch (err) {
    res.status(400).json({success: false, error: err.message});
  }
};

// @desc    Delete client
// @route   DELETE api/client/:id
exports.deleteClient = async (req, res, next) => {
  // Delete client with req.params.id
  try {
    const { id: _id } = req.params;
    const docs = await Client.findByIdAndDelete(_id);
    if(docs != null) res.status(200).json({success: true, data: docs});
    else {
      res.status(404).json({success: false, error: "Client Not Found"});
    }
  } catch (err) {
    res.status(400).json({success: false, error: err.message});
  }
};

// @desc    Update project
// @route   PUT api/project/:id
exports.updateProject = async (req, res, next) => {
  // Update project with req.params.id
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
          .status(400)
          .json({ success: false, error: `Invalid Id ${req.params.id}` });
      }

      let project = await Project.findById(req.params.id);

      if (!project) {
        return res
          .status(404)
          .json({ success: false, error: `No project with id ${req.params.id}` });
      }
      project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({ success: true, project });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
};

// @desc    Update client
// @route   PUT api/client/:id
exports.updateClient = async (req, res, next) => {
  // Update client
  try {
    let clientObj = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }
    const client = await Client.findByIdAndUpdate(req.params.id, clientObj, { new: true, runValidators: true })
    res.status(200).json({ success: true, message: "client updated successfully", client: client });
  }
  catch {
    res.status(400).json({ success: false, message: "error occurred" });
  }
};
