const EateryCategory = require("../models/eateryCategory");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

module.exports = {
  create,
  listAll,
  deleteOne,
};

async function create(req, res) {
  try {
    const category = await EateryCategory.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function listAll(req, res) {
  try {
    const category = await EateryCategory.find(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const category = await EateryCategory.findOneAndDelete({name: req.params.categoryName});
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}
