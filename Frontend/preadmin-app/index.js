const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const ErrorHandler = require("./middleware/ErrorHandler");
const connectDB = require("./config/dbConnection");
const PORT = process.env.PORT || 9003;
console.log("i am in the express project!");

const cors = require("cors");

const corsOptions = {
  credentials: true,
  origin: "http://localhost:9005",
};
app.use(cors(corsOptions));
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.render("./views/index.html");
// });
connectDB();
app.use(express.json());
app.use("/api", require("./routes/AdminRoute"));
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
