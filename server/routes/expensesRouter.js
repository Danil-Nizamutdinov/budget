const Router = require("express");
const router = new Router();

const expensesController = require("../controllers/expensesController");

router.post("/expenses", expensesController.creatExpenses);
router.get("/expenses", expensesController.getExpenses);
router.delete("/expenses", expensesController.deleteExpense);

module.exports = router;
