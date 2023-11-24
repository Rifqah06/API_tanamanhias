const db = require("../config/database");
const mysql = require("mysql2/promise");

const InsertPelanggan = async function (IDPelanggan, NamaPelanggan, Email, Alamat) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL CreatePelanggan(?, ?, ?, ?)", [IDPelanggan, NamaPelanggan, Email, Alamat]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const updatePelanggan = async function (IDPelanggan, NamaPelanggan, Email, Alamat) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdatePelanggan(?, ?, ?, ?)", [IDPelanggan, NamaPelanggan, Email, Alamat]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllPelanggan = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM Pelanggan");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetPelangganById = async function (IDPelanggan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetPelangganById(?)", [IDPelanggan]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

const DeletePelanggan = async function (IDPelanggan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeletePelanggan(?)", [IDPelanggan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertPelanggan,
    GetAllPelanggan,
    GetPelangganById,
    updatePelanggan,
    DeletePelanggan
}