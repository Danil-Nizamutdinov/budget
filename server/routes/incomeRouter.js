const Router = require("express");
const router = new Router();

const incomeController = require("../controllers/incomeController");

router.post("/income", incomeController.creatIncome);
router.get("/income", incomeController.getIncome);
router.delete("/income", incomeController.deleteIncome);

module.exports = router;