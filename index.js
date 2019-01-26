require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const users = require("./routes/usersRoutes.js");
const todos = require("./routes/todosRoutes.js");
const auth = require("./routes/authRoutes");
const passport = require("./passport");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", users);
app.use("/api/todos", todos);
app.use("/", auth);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
