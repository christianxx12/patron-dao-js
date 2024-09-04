const UserDAO = require("../dao/userDAO");

class UserController {
  async create(req, res) {
    const user = await UserDAO.create(req.body);
    res.status(201).json(user);
  }

  async getAll(req, res) {
    const users = await UserDAO.findAll();
    res.json(users);
  }

  async getById(req, res) {
    const user = await UserDAO.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  }

  async update(req, res) {
    const user = await UserDAO.update(req.params.id, req.body);
    res.json(user);
  }

  async delete(req, res) {
    const user = await UserDAO.delete(req.params.id);
    res.json(user);
  }
}

module.exports = new UserController();
