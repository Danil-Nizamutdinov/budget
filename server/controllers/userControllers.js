const { User, Income, Expenses } = require("../models/models");
const bcrypt = require("bcrypt");

class UserController {
  async registration(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "Некорректный email или password" });
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return res.json({ message: "Пользователь с таким email уже существует" });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword });

    return res.json({ email: user.email, id: user.id });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ message: "пользоваетеля с таким email не существует" });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      return res.json({ message: "не верный пароль" });
    }
    return res.json({ email: user.email, id: user.id });
  }

  async check(req, res) {
    const { id } = req.query;
    if (!id) {
      return res.json({ message: "err, нет id" });
    }

    return res.json({ message: id });
  }
}

module.exports = new UserController();
