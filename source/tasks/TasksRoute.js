const express = require("express");
// const auth = require("../../middlewares/auth");
// const validate = require("../../middlewares/validate");
// const userValidation = require("../../validations/user.validation");
const TasksController = require("./TasksController");

const router = express.Router();

router.route("/task").get(TasksController.GetTasks);

router.route("/task/:taskId").put(TasksController.PutTask);

module.exports = router;
