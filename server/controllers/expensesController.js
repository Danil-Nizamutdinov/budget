const { User, Expenses } = require("../models/models");

class ExpensesController {
  async creatExpenses(req, res) {
    const { userId, name, price } = req.body;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const newExpenses = await Expenses.create({
      name,
      price,
      userId,
    });

    return res.json(newExpenses);
  }
  async getExpenses(req, res) {
    const { userId } = req.query;

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const expenses = await Expenses.findAll({ where: { userId } });
    if (expenses.length === 0) {
      return res.json({ message: "тут пусто" });
    }

    return res.json(expenses);
  }
  async deleteExpense(req, res) {
    const { userId, expenseId } = req.query;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.json({ message: "Пользователь не найден" });
    }

    const expense = await Expenses.findOne({
      where: { userId, id: expenseId },
    });

    if (!expense) {
      return res.json({ message: "Расход не найден" });
    }

    await expense.destroy();

    return res.json(expense);
  }
}

module.exports = new ExpensesController();
