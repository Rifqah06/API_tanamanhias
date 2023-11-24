const router = require("express").Router()

const Tanaman = require("../controller/tanamanController");

router.post("/create", Tanaman.InsertTanaman)
router.put("/update/:IDTanaman", Tanaman.UpdateTanaman)
router.get("/getall", Tanaman.GetAllTanaman)
router.get("/get/:IDTanaman", Tanaman.GetTanamanByID)
router.delete("/delete/:IDTanaman", Tanaman.DeleteTanaman)

module.exports = router