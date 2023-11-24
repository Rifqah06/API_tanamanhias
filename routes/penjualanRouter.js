const router = require("express").Router();

const Penjualan = require("../controller/penjualanController");

router.post("/create", Penjualan.insertPenjualan);
router.put("/update/:IDPenjualan", Penjualan.updatePenjualan);
router.get("/getall", Penjualan.getAllPenjualan);
router.get("/get/:IDPenjualan", Penjualan.getPenjualanByID);
router.delete("/delete/:IDPenjualan", Penjualan.deletePenjualan);

module.exports = router;
