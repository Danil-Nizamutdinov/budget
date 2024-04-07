const { User, Income } = require("../models/models");

class IncomeController {
  async creatIncome(req, res) {
    const { userId, name, price } = req.body;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const newIncome = await Income.create({
      name,
      price,
      userId,
    });

    return res.json(newIncome);
  }
  async getIncome(req, res) {
    const { userId } = req.query;

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const income = await Income.findAll({ where: { userId } });
    if (income.length === 0) {
      return res.json({ message: "тут пусто" });
    }

    return res.json(income);
  }
  async deleteIncome(req, res) {
    const { userId, incomeId } = req.query;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const income = await Income.findOne({
      where: { userId, id: incomeId },
    });

    if (!income) {
      return res.json({ message: "Расход не найден" });
    }

    await income.destroy();

    return res.json(income);
  }
}

module.exports = new IncomeController();