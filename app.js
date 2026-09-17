const express = require('express');
const connectDB = require("./src/config/database");
const User = require("./src/models/user");
require("dotenv").config()
const app = express();
const port = process.env.PORT || 4000

// IMP ==> Middleware to parse JSON requests
app.use(express.json());


//add to the user in db

app.post("/signup", async (req, res) => {

  const user = new User(req.body)

  await user.save()

  res.send("user is successfully resgistered")

})


//first connect to db then start the server
connectDB().then(() => {
  console.log('Connected to MongoDB');

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running port:${port}`);
  });


}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});




