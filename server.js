const express = require("express");
const cors = require('cors')
const app = express();
const UserRoute = require("./routes/UserRoute");
const ExpensesRoute = require("./routes/ExpensesRoute");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");

require("dotenv").config();
connectDB();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", ExpensesRoute);
app.use("/api", UserRoute);

app.listen(6969, () => {
  console.log("server started ay 6969");
});
