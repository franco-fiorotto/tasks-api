const express = require("express");
const tasksRoute = require("../../tasks/TasksRoute.js");
const router = express.Router();

const defaultRoutes = [
	{
		path: "/",
		route: tasksRoute,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
