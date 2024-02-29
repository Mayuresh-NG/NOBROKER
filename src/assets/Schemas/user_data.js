const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mayureshngorantiwar:4pH5dvC4d7XRUe8O@cluster0.sdnavtq.mongodb.net/NOAGENT"
);

const userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone_number: Number,
  user_type:String
});

const UserModel = mongoose.model("user_data", userSchema);

const newUser = new UserModel({
  full_name: "Mayuresh Gorantiwar",
  email: "mayureshngorantiwar@gmail.com",
  phone_number: 8999145269,
  user_type:"user"
});

newUser
  .save()
  .then((result) => {
    console.log("Data saved successfully:", result);
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  });
