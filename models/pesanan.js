const db = require("../config/database");
const mysql = require("mysql2/promise");


const InsertPesanan = async function (IDPesanan, IDPelanggan, TanggalPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL CreatePesanan(?, ?, ?)", [IDPesanan, IDPelanggan, TanggalPesanan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const UpdatePesanan = async function (IDPesanan, IDPelanggan, TanggalPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdatePesanan(?, ?, ?)", [IDPesanan, IDPelanggan, TanggalPesanan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetAllPesanan = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM Pesanan");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetPesananById = async function (IDPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetPesananById(?)", [IDPesanan]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

const DeletePesanan = async function (IDPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeletePesanan(?)", [IDPesanan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertPesanan,
    GetAllPesanan,
    GetPesananById,
    UpdatePesanan,
    DeletePesanan
}
