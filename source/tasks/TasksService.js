const axios = require("axios");
const { DefaultQuantity, ApiBaseUrl } = require("../../config.json");

const formattingTasksResponse = (response) => {
	let responseFormated = [];
	response.forEach((title, k) =>
		responseFormated.push({ id: `${k + 1}`, title: title, isDone: false })
	);
	return responseFormated;
};

const GetTasks = async (req, res) => {
	const query = req.query;
	let response = {};
	let quantityNumber = DefaultQuantity;

	if (query && query.quantity) {
		quantityNumber = Number(query.quantity);
	}
	if (isNaN(quantityNumber)) {
		return res.status(400).json({
			error: "quantity must be a number",
		});
	}

	const queryUrl = `${ApiBaseUrl}?quantity=${quantityNumber}`;

	try {
		response = await axios.get(queryUrl);
		if (!(response.status = 200)) {
			res.status(500);
		}

		if (!response.data || response.data.length === 0) {
			res.status(204);
		}

		const formatedResponse = formattingTasksResponse(response.data);
		return JSON.stringify(formatedResponse);
	} catch (e) {
		res.status(500).json({
			error: "500: Internal server error",
		});
	}
};

const PutTask = async (req, res) => {
	console.log("taskId: ", req.params.taskId);
	const task = req.body;
	try {
		if (Object.entries(task).length === 0) {
			return res.status(400).json({
				error: "body is empty",
			});
		}

		if (!task || !task.isDone) {
			return res.status(400).json({
				error: "isDone is missing",
			});
		}

		console.log("put: ", req.body);
	} catch (e) {
		res.status(500).json({
			error: "500: Internal server error",
		});
	}
};

module.exports = { GetTasks, PutTask };
