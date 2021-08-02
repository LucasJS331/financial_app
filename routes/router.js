const {Router} = require("express");
const router = Router();
const financial_controller = require("../controller/financial-controller");

router.post("/search",financial_controller.Search);
router.get("/view/raw/:search",financial_controller.View);
router.get("/", financial_controller.Index);

module.exports = router;