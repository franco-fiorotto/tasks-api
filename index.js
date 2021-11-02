const express = require("express");
const cors = require("cors");
const catchError = require("./source/utils/catchError");
const routesV1 = require("./source/routes/v1");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/v1", routesV1);

app.use(catchError);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
