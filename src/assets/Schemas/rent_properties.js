const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mayureshngorantiwar:4pH5dvC4d7XRUe8O@cluster0.sdnavtq.mongodb.net/NOAGENT"
);

const propSchema = new mongoose.Schema({
  owner: String,
  rent_price: Number,
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
  preferred_tenents: {
    family: Boolean,
    Company: Boolean,
    B_male: Boolean,
    B_female: Boolean,
  },
  images: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
  Availability_data: Date,
  deposit: Number,
});

const PropModel = mongoose.model("rent_property", propSchema);

module.exports = PropModel;

