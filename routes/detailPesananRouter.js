const router = require("express").Router();

const DetailPesanan = require("../controller/detailPesananController");

router.post("/create", DetailPesanan.insertDetailPesanan);
router.put("/update/:IDDetailPesanan", DetailPesanan.updateDetailPesanan);
router.get("/getall", DetailPesanan.getAllDetailPesanan);
router.get("/get/:IDDetailPesanan", DetailPesanan.getDetailPesananByID);
router.delete("/delete/:IDDetailPesanan", DetailPesanan.deleteDetailPesanan);

module.exports = router;
