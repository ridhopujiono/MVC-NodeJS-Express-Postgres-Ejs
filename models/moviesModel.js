const { Sequelize } = require('sequelize');
const db = require('../config/database.js');

const { DataTypes } = Sequelize;

const Movie = db.define('movies',
    {
        title: DataTypes.STRING,
        genres: DataTypes.STRING,
        year: DataTypes.STRING
    },
    {
        freezeTableName: true
    }
);

module.exports = Movie;
