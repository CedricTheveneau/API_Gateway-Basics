const express = require("express");
const router = express();
const productCtrl = require("../controllers/product.js");

router.post("/create", productCtrl.create);
router.get("/", productCtrl.getAll);
router.get("/:id", productCtrl.getProduct);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.delete);

module.exports = router;
