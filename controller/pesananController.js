const Pesanan = require ("../models/pesanan")

const InsertPesanan = async (req, res) => {
    const {IDPesanan, IDPelanggan, TanggalPesanan} = req.body;
    try {
        const newPesanan = await Pesanan.InsertPesanan (IDPesanan, IDPelanggan, TanggalPesanan);
        res.status(200).json({
            status: "Sukses!",
            data: {
                newPesanan
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}


const UpdatePesanan = async (req, res) => {
    const { IDPesanan } = req.params;
    const { IDPelanggan, TanggalPesanan} = req.body;
    try {
        const updatePesanan = await Pesanan.UpdatePesanan( IDPesanan, IDPelanggan, TanggalPesanan );
        res.status(200).json({
            status: "Sukses!",
            data: {
                updatePesanan
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const GetAllPesanan = async (req, res) => {
    try {
        const allPesanan = await Pesanan.GetAllPesanan();
        res.status(200).json({
            status: "Sukses!",
            data: {
                allPesanan
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        })
    }
}

const GetPesananById = async  (req, res) => {
    const IDPesanan = req.params.id;
    try {
        const pesanan = await Pesanan.GetPesananById(IDPesanan);
        if (pesanan) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    pesanan
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Pesanan tidak ditemukan"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}


const DeletePesanan = async (req, res) => {
    const { IDPesanan } = req.params;
    try {
        await Pesanan.DeletePesanan(IDPesanan);
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

module.exports = {
    InsertPesanan,
    GetAllPesanan,
    GetPesananById,
    UpdatePesanan,
    DeletePesanan
}
