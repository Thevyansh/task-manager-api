const express = require("express");
require('./db/mongoose');
const userRouter = require('./router/user');
const taskRouter = require('./router/task');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(userRouter, taskRouter);

app.listen(port, () => {
    console.log("server is running on port " + port);
});