const { Purpose, PurposeItem } = require("../models/models");

class purposeItemController {
  async creatPurposeItem(req, res) {
    const { purposeId, name, price } = req.body;

    const purpose = await Purpose.findOne({ where: { id: purposeId } });

    if (!purpose) {
      return res.json({ message: "такой цели нет" });
    }

    const newPurposeItem = await PurposeItem.create({ name, price, purposeId });

    return res.json(newPurposeItem);
  }

  async deletePurposeItem(req, res) {
    const { purposeId, purposeItemId } = req.query;

    const purpose = await Purpose.findOne({ where: { id: purposeId } });

    if (!purpose) {
      return res.json({ message: "цели не найдено" });
    }

    const purposeItem = await PurposeItem.findOne({
      where: { purposeId, id: purposeItemId },
    });

    if (!purposeItem) {
      return res.json({ message: "вложения нет" });
    }

    await purposeItem.destroy();

    return res.json(purposeItem);
  }
}

module.exports = new purposeItemController();
