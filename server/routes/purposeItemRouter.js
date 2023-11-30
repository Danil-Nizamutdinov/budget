const Router = require("express");
const router = new Router();

const purposeItemController = require("../controllers/purposeItemController");

router.post("/purposeItem", purposeItemController.creatPurposeItem);
router.delete("/purposeItem", purposeItemController.deletePurposeItem);

module.exports = router;
