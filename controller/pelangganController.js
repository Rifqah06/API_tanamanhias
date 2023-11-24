const Pelanggan = require("../models/pelanggan")

const insertPelanggan = async (req, res) =>{
    const { IDPelanggan, NamaPelanggan, Email, Alamat } = req.body
    try {
        const newNamaPelanggan = await Pelanggan.InsertPelanggan(IDPelanggan, NamaPelanggan, Email, Alamat)
        res.status(200).json({
            status: "sukses",
            data: {
                newNamaPelanggan
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Gagal",
            message: error.message
        });
    }
}

const updatePelanggan = async (req, res) => {
    const { IDPelanggan } = req.params;
    const {  NamaPelanggan, Email, Alamat } = req.body;
    try {
        const updateNamaPelanggan = await Pelanggan.updatePelanggan(IDPelanggan, NamaPelanggan, Email, Alamat)
            res.status(200).json({
                status: "success",
                data: {
                    updateNamaPelanggan
                }
            });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message,
        });
    }
}

const deletePelanggan = async (req, res) => {
    const {IDPelanggan} = req.params;
    try {
        await Pelanggan.DeletePelanggan(IDPelanggan);
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


const getPelangganByID = async (req, res) => {
    const IDPelanggan = req.params.id
    try {
        const pelanggan = await Pelanggan.GetPelangganById(IDPelanggan);
        if (pelanggan) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    pelanggan
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Pelanggan tidak ditemukan"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const getAllPelanggan = async (req, res) => {
    try {
        const allPelanggan = await Pelanggan.GetAllPelanggan();
        res.status(200).json({
            status: "Sukses!",
            data: {
                allPelanggan
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
    insertPelanggan,
    updatePelanggan,
    deletePelanggan,
    getPelangganByID,
    getAllPelanggan,
};

