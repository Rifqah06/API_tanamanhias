const db = require("../config/database");
const mysql = require("mysql2/promise");


const InsertDetailPesanan = async function (IDDetailPesanan, IDPesanan, IDTanaman, Jumlah) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL CreateDetailPesanan(?, ?, ?, ?)", [IDDetailPesanan, IDPesanan, IDTanaman, Jumlah]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const UpdateDetailPesanan = async function (IDDetailPesanan, IDPesanan, IDTanaman, Jumlah) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdateDetailPesanan(?, ?, ?, ?)", [IDDetailPesanan, IDPesanan, IDTanaman, Jumlah]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const GetAllDetailPesanan = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM DetailPesanan");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetDetailPesananById = async function (IDDetailPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetDetailPesananById(?)", [IDDetailPesanan])
        return rows;
    } catch (error) {
        throw error
    } finally {
        connection.end()
    }
}

const DeleteDetailPesanan = async function (IDDetailPesanan) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeleteDetailPesanan(?)", [IDDetailPesanan]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertDetailPesanan,
    GetAllDetailPesanan,
    GetDetailPesananById,
    UpdateDetailPesanan,
    DeleteDetailPesanan
}
