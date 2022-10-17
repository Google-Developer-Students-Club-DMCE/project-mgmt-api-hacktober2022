const router = require("express").Router();

const {
  getIndex,
  getClient,
  getProject,

  postClient,
  postProject,

  deleteClient,
  deleteProject,

  updateClient,
  updateProject,
} = require("../controllers/main.controllers");

router.get("/", getIndex);

router
  .post("/project", postProject)

  router
  .post("/client", postClient)

router
  .route("/client/:id")
  .get(getClient)
  .delete(deleteClient)
  .put(updateClient);

  router
  .route("/project/:id")
  .get(getProject)
  .delete(deleteProject)
  .put(updateProject);

module.exports = router;
