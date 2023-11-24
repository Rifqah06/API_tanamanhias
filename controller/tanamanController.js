const Tanaman = require('../models/tanaman');

const InsertTanaman = async (req, res) => {
  const { NamaTanaman, Harga, Stok, IDDetailTanaman } = req.body;
  try {
    const newTanaman = await Tanaman.InsertTanaman( NamaTanaman, Harga, Stok, IDDetailTanaman);
    res.status(200).json({
      status: 'success',
      data: {
        newTanaman,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

const UpdateTanaman = async (req, res) => {
  const { IDTanaman } = req.params;
  const { NamaTanaman, Harga, Stok, IDDetailTanaman} = req.body;
  try {
    const updateTanaman = await Tanaman.UpdateTanaman (IDTanaman, NamaTanaman, Harga, Stok, IDDetailTanaman);
    if (updateTanaman) {
      res.status(200).json({
        status: 'success',
        data: {
          updateTanaman,
        },
      });
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'Data tanaman tidak ditemukan.',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

const DeleteTanaman = async (req, res) => {
  const { IDTanaman } = req.params;
  try {
    const deleteTanaman = await Tanaman.DeleteTanaman(IDTanaman);
    if (deleteTanaman) {
      res.status(200).json({
        status: 'success',
        data: null
      });
    } else {
      res.status(404).json({
        status: 'failed',
        message: 'Data tanaman tidak ditemukan',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

const GetTanamanByID = async (req, res) => {
    const IDTanaman = req.params.id;
    try {
        const tanaman = await Tanaman.GetTanamanById(IDTanaman);
        if (pesanan) {
            res.status(200).json({
                status: "Sukses!",
                data: {
                    tanaman
                }
            });
        } else {
            res.status(404).json({
                status: "Gagal!",
                message: "Tanaman tidak ditemukan."
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "Gagal!",
            message: error.message
        });
    }
}

const GetAllTanaman = async (req, res) => {
  try {
    const allTanaman = await Tanaman.GetAllTanaman();
    res.status(200).json({
      status: 'success',
      data: {
        allTanaman
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = {
  InsertTanaman,
  UpdateTanaman,
  DeleteTanaman,
  GetTanamanByID,
  GetAllTanaman,
};
