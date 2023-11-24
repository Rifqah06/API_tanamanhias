const db = require("../config/database");
const mysql = require("mysql2/promise");


const InsertPenjualan = async function (IDPelanggan, TanggalPenjualan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL CreatePenjualan(?, ?)", [IDPelanggan, TanggalPenjualan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const UpdatePenjualan = async function (IDPenjualan, IDPelanggan, TanggalPenjualan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdatePenjualan(?, ?, ?)", [IDPenjualan, IDPelanggan, TanggalPenjualan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllPenjualan = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM Penjualan");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetPenjualanById = async function (IDPenjualan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetPenjualanById(?)", [IDPenjualan]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}


const DeletePenjualan = async function (IDPenjualan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeletePenjualan(?)", [IDPenjualan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertPenjualan,
    GetAllPenjualan,
    GetPenjualanById,
    UpdatePenjualan,
    DeletePenjualan
}
