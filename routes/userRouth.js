const mongoose = require("mongoose");
const express = require("express");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app = express()) => {
    app.get("/api/blogs/:id", requireLogin, async (req, res) => {});
};
