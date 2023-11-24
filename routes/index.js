const express = require("express")

const router = express.Router()

const Pelanggan = require("./pelangganRouter")
const Penjualan = require("./penjualanRouter")
const Tanaman = require("./tanamanRouter")
const Pesanan = require("./pesananRouter")
const DetailPesanan = require("./detailPesananRouter")

router.use("/api/pelanggan", Pelanggan)
router.use("/api/penjualan", Penjualan)
router.use("/api/tanaman", Tanaman)
router.use("/api/penjualan", Pesanan)
router.use("/api/detailpesanan", DetailPesanan)


module.exports = router