const TasksService = require("./TasksService");

const GetTasks = async (req, res, next) => {
	try {
		const result = await TasksService.GetTasks(req, res);
		res.end(result);
	} catch (e) {
		next();
	}
};

const PutTask = async (req, res, next) => {
	try {
		const result = await TasksService.PutTask(req, res);
		res.end(result);
	} catch (e) {
		next();
	}
};

module.exports = { GetTasks, PutTask };
