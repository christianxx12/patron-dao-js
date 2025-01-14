const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getById);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

module.exports = router;
