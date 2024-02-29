const mongoose = require("mongoose");
const PropModel = require('./rent_properties');
const sell_PropModel = require("./sell_properties");

mongoose.connect(
  "mongodb+srv://mayureshngorantiwar:4pH5dvC4d7XRUe8O@cluster0.sdnavtq.mongodb.net/NOAGENT"
);

const p1 = new PropModel({
  owner: "mayuresh",
  rent_price: 1500,
  bhk_type: "2BHK",
  built_Up_area: "1200 sqft",
  state: "California",
  Address: {
    street_name: "123 Main St",
    city: "San Francisco",
    Landmark: "Near Park",
    pincode: 12345,
  },
  Furnished: {
    full: true,
    semi: false,
    none: false,
  },
  preferred_tenents: {
    family: true,
    Company: false,
    B_male: true,
    B_female: false,
  },
  images: [
    {
      data: Buffer.from("sampleImageData1", "base64"),
      contentType: "image/jpeg",
    },
    {
      data: Buffer.from("sampleImageData2", "base64"),
      contentType: "image/png",
    },
  ],
  Availability_data: "03/25/2015",
  deposit: 2000,
});

p1.save().then((result) => {
    console.log("Data saved successfully:", result);
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  });


const s1 = new sell_PropModel({
  owner: "Rajesh",
  prop_price: 150000,
  bhk_type: "2BHK",
  built_Up_area: "1200 sqft",
  state: "California",
  Address: {
    street_name: "123 Main St",
    city: "San Francisco",
    Landmark: "Near Park",
    pincode: 12345,
  },
  Furnished: {
    full: true,
    semi: false,
    none: false,
  },
  images: [
    {
      data: Buffer.from("sampleImageData1", "base64"),
      contentType: "image/jpeg",
    },
    {
      data: Buffer.from("sampleImageData2", "base64"),
      contentType: "image/png",
    },
  ],
  property_type: "Villa",
  amenities: ["Swimming pool", "Gym", "Parking"],
});

s1.save().then((result) => {
    console.log("Data saved successfully:", result);
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  });
