const router = require("express").Router()

const Pelanggan = require("../controller/pelangganController");

router.post("/create", Pelanggan.insertPelanggan)
router.put("/update/:IDPelanggan", Pelanggan.updatePelanggan)
router.get("/getall", Pelanggan.getAllPelanggan)
router.get("/get/:IDPelanggan", Pelanggan.getPelangganByID)
router.delete("/delete/:IDPelanggan", Pelanggan.deletePelanggan)

module.exports = router;