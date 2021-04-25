const express = require("express");

const {postsCtrl} = require("../controllers");

const router = express.Router();

router.get("/", postsCtrl.getAll);

router.get("/:id", postsCtrl.getOne);

router.posts("/", express.json(), postsCtrl.add);

module.exports = router;