const { foodModel } = require("../models/foodModel");
const fs = require("fs");
const path = require("path");

// Add food item
const addFood = async (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image uploaded." });
  }

  const image_filename = req.filename;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename // Storing only the filename
  });

  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added successfully", food });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ success: false, message: "Error adding food", error: err.message });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ success: false, message: "Error retrieving food list", error: err.message });
  }
};

module.exports = { addFood, listFood };
