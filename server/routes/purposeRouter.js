const Router = require("express");
const router = new Router();

const purposeController = require("../controllers/purposeController");

router.post("/purpose", purposeController.creatPurpose);
router.get("/purpose", purposeController.getPurpose);
router.delete("/purpose", purposeController.deletePurpose);

module.exports = router;
