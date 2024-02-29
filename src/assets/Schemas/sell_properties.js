const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mayureshngorantiwar:4pH5dvC4d7XRUe8O@cluster0.sdnavtq.mongodb.net/NOAGENT"
);

const sell_propSchema = new mongoose.Schema({
  owner: String,
  prop_price: Number,
  bhk_type: String,
  built_Up_area: String,
  state: String,
  Address: {
    street_name: String,
    city: String,
    Landmark: String,
    pincode: Number,
  },
  Furnished: {
    full: Boolean,
    semi: Boolean,
    none: Boolean,
  },
  images: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
  property_type: String, 
  amenities: {
    type: [String], 
    default: [] 
  }
});

const sell_PropModel = mongoose.model("sell_properties", sell_propSchema);

module.exports=sell_PropModel

