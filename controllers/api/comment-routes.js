const router = require("express").Router();

const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  const comment = await Comment.findAll();
});

router.post("/", async (req, res) => {
  const comment = await Comment.create();
});

router.delete("/", async (req, res) => {
  const comment = await Comment.destroy();
});