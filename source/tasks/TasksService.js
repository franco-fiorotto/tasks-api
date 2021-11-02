const httpStatus = require("http-status");
const axios = require("axios");
const CustomError = require("../utils/CustomError");

const formattingTasksResponse = (response) => {
  let responseFormated = [];
  response.forEach((title, k) =>
    responseFormated.push({ id: `${k + 1}`, title: title, isDone: false })
  );
  return responseFormated;
};

const GetTasks = async (reqQuery) => {
  let response = {};
  let quantityNumber = 3;

  if (reqQuery.quantity) {
    quantityNumber = reqQuery.quantity;
  }

  const queryUrl = `https://lorem-faker.vercel.app/api?quantity=${quantityNumber}`;

  try {
    response = await axios.get(queryUrl);
    if (!(response.status = 200)) {
      throw new CustomError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Error getting data"
      );
    }

    if (!response.data || response.data.length === 0) {
      throw new CustomError(httpStatus.NO_CONTENT);
    }

    const formatedResponse = formattingTasksResponse(response.data);
    return JSON.stringify(formatedResponse);
  } catch (e) {
    if (e.type) {
      throw new CustomError(e.type, e.message);
    }
    throw new CustomError(httpStatus.INTERNAL_SERVER_ERROR, "500 error");
  }
};

const PutTask = async (req) => {
  console.log("taskId: ", req.params.taskId);
  console.log("put: ", req.body);
};

module.exports = { GetTasks, PutTask };
