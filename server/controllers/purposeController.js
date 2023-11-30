const { User, Purpose, PurposeItem } = require("../models/models");

class purposeController {
  async creatPurpose(req, res) {
    const { userId, name, price } = req.body;

    try {
      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res.json({ message: "Пользователь не найден" });
      }

      const newPurpose = await Purpose.create({
        name,
        price,
        userId,
      });

      return res.json(newPurpose);
    } catch (e) {
      console.log(e);
    }
  }

  async getPurpose(req, res) {
    const { userId } = req.query;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.json({ message: "пользователь не найден" });
    }

    const purpose = await Purpose.findAll({
      where: {
        userId,
      },
      include: PurposeItem,
    });

    if (!purpose) return res.json({ message: "пока что тут пусто" });

    return res.json(purpose);
  }

  async deletePurpose(req, res) {
    const { purposeId } = req.query;
    try {
      const purpose = await Purpose.findOne({
        where: {
          id: purposeId,
        },
        include: PurposeItem, // Включаем связанные записи PurposeItem
      });

      if (!purpose) {
        return res.json({ message: "Цель не найдена" });
      }

      await purpose.destroy({ cascade: true });

      return res.json({ message: "Цель удалена" });
    } catch (e) {
      console.log(e);
      return res.json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new purposeController();
