const Penjualan = require("../models/penjualan")

const insertPenjualan = async (req, res) =>{
    const { IDPelanggan, TanggalPenjualan } = req.body
    try {
        const newPenjualan = await Penjualan.InsertPenjualan(IDPelanggan, TanggalPenjualan)
        res.status(200).json({
            status: "sukses",
            data: {
                newPenjualan
            }
        })
    } catch (error) {
        res.status(500).jso({
            status: "Gagal",
            message: error.message
        })
    }
}

const updatePenjualan = async (req, res) => {
    const { IDPenjualan } = req.params;
    const {IDPelanggan, TanggalPenjualan } = req.body;
    try {
        const updatePenjualan = await Penjualan.UpdatePenjualan(IDPenjualan, IDPelanggan, TanggalPenjualan);
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatePenjualan
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const deletePenjualan = async (req, res) => {
    const { IDPenjualan } = req.params;
    try {
        await Penjualan.DeletePenjualan(IDPenjualan);
        res.status(200).json({
            status: "success",
            data: null
            })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        })
    }
}

const getPenjualanByID = async (req, res) => {
    const IDPenjualan = req.params.id;
    try {
        const penjualan = await Penjualan.GetPenjualanById(IDPenjualan);
        if (penjualan) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    penjualan
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Penjualan tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}


const getAllPenjualan = async (req, res) => {
    try {
        const allPenjualan = await Penjualan.GetAllPenjualan()
        res.status(200).json({
            status: "Sukses!",
            data: {
                allPenjualan
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}
module.exports = {
    insertPenjualan,
    updatePenjualan,
    deletePenjualan,
    getPenjualanByID,
    getAllPenjualan,
};

