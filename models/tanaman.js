const db = require("../config/database");
const mysql = require("mysql2/promise");


const InsertTanaman = async function (NamaTanaman, Harga, Stok) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL CreateTanaman(?, ?, ?)", [NamaTanaman, Harga, Stok]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

const UpdateTanaman = async function (NamaTanaman, Harga, Stok) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL UpdateTanaman(?, ?, ?)", [NamaTanaman, Harga, Stok]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetAllTanaman = async function () {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("SELECT * FROM Tanaman");
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}


const GetTanamanById = async function (IDTanaman) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL GetTanamanById(?)", [IDTanaman]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}


const DeleteTanaman = async function (IDTanaman) {
    const connection = await mysql.createConnection(db);
    try {
        const [rows] = await connection.execute("CALL DeleteTanaman(?)", [IDTanaman]);
        return rows;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = {
    InsertTanaman,
    GetAllTanaman,
    GetTanamanById,
    UpdateTanaman,
    DeleteTanaman
}