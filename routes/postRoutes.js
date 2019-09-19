const mongoose = require("mongoose");
const express = require("express");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app = express()) => {
    app.get("/api/post", requireLogin, (req, res) => {
        const id = req.user.id;
        res.send(id);
    });
};
