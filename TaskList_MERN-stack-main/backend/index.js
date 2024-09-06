const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoute = require("./routes/task");
const Task = require("./models/Task"); // Import the Task model

// CHANGE URL TO localhost or Your network url
// if localhost not works then change it to 127.0.0.1
const serverUrl = 4000;

mongoose
  .connect("mongodb://localhost:27017/tasklist")
  .then(() => console.log("Database connection successed!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());
app.options("*", cors());

// Testing route
app.get("/api/test", async (req, res) => {
  res.status(200).send("Test succesfully made!");
});

app.use("/api", taskRoute);
// API route for deleting a task
app.delete('/api/task/:taskId', (req, res) => {
    const { taskId } = req.params;
  
    Task.findByIdAndRemove(taskId, (err, result) => {
      if (err) {
        console.error('Error deleting task:', err);
        res.status(500).send('Error deleting task');
      } else {
        console.log('Task deleted successfully:', result);
        res.status(200).send('Task deleted successfully');
      }
    });
  });
  
app.listen(4000, serverUrl, () => {
  console.log("Backend server running!");
});
