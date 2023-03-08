const { Sequelize } = require('sequelize');
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'movies'
});
// Menguji koneksi ke database
db
    .authenticate()
    .then(() => {
        console.log('Koneksi berhasil.');
    })
    .catch((err) => {
        console.error('Koneksi gagal:', err);
    });

module.exports = db;