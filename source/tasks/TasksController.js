const TasksService = require("./TasksService");

const GetTasks = async (req, res, next) => {
  try {
    const result = await TasksService.GetTasks(req.query);
    res.send(result);
  } catch (e) {
    next(e);
  }
};

const PutTask = async (req, res, next) => {
  console.log("put");
  try {
    const result = await TasksService.PutTask(req);
    res.send(result);
  } catch (e) {
    next(e);
  }
};

module.exports = { GetTasks, PutTask };
