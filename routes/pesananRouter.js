const router = require("express").Router();

const Pesanan = require("../controller/pesananController");

router.post("/create", Pesanan.InsertPesanan);
router.put("/update/:IDPesanan", Pesanan.UpdatePesanan);
router.get("/getall", Pesanan.GetAllPesanan);
router.get("/get/:IDPesanan", Pesanan.GetPesananById);
router.delete("/delete/:IDPesanan", Pesanan.DeletePesanan);

module.exports = router;
