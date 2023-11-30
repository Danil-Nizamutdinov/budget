const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const expensesRouter = require("./expensesRouter");
const purposeRouter = require("./purposeRouter");
const purposeItemRouter = require("./purposeItemRouter");

router.use("/user", userRouter);
router.use("/", expensesRouter);
router.use("/", purposeRouter);
router.use("/", purposeItemRouter);

module.exports = router;
