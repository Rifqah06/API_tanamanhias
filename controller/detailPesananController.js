const DetailPesanan = require("../models/detailPesanan")

const insertDetailPesanan = async (req, res) => {
    const { IDDetailPesanan, IDPesanan, IDTanaman, Jumlah } = req.body;
    try {
        const newDetailPesanan = await DetailPesanan.InsertDetailPesanan(IDDetailPesanan, IDPesanan, IDTanaman, Jumlah);
        res.status(200).json({
            status: "success",
            data: {
                newDetailPesanan,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
};

const updateDetailPesanan = async (req, res) => {
    const { IDDetailPesanan } = req.params;
    const { IDPesanan, IDTanaman, Jumlah } = req.body;
    try {
        const updateDetailPesanan = await DetailPesanan.UpdateDetailPesanan (IDDetailPesanan, IDPesanan, IDTanaman, Jumlah);
        res.status(200).json({
            status: "success",
            data: {
                updateDetailPesanan
            }
         });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message,
        })
    }
}

const deleteDetailPesanan = async (req, res) => {
    const { IDDetailPesanan } = req.params;
    try {
        await DetailPesanan.DeleteDetailPesanan(IDDetailPesanan);
        res.status(200).json({
            status: "success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message,
        })
    }
}

const getDetailPesananByID = async (req, res) => {
    const IDDetailPesanan = req.params.id
    try {
        const detailPesanan = await DetailPesanan.GetDetailPesananById(IDDetailPesanan);
        if (detailPesanan) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    detailPesanan
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Pesanan tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const getAllDetailPesanan = async (req, res) => {
    try {
        const allDetailPesanan = await DetailPesanan.GetAllDetailPesanan();
        res.status(200).json({
            status: "Sukses!",
            data: {
                allDetailPesanan
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

module.exports = {
    insertDetailPesanan,
    updateDetailPesanan,
    deleteDetailPesanan,
    getDetailPesananByID,
    getAllDetailPesanan,
};
