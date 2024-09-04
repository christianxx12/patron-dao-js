const User = require("../models/user");

class UserDAO {
  async create(userData) {
    return await User.create(userData);
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async update(id, userData) {
    await User.update(userData, { where: { id } });
    return await this.findById(id);
  }

  async delete(id) {
    const user = await this.findById(id);
    await User.destroy({ where: { id } });
    return user;
  }
}

module.exports = new UserDAO();
