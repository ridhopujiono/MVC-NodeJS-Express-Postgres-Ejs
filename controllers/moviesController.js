const express = require('express');
const app = express();
const Movie = require('../models/moviesModel.js');

exports.index = async (req, res) => {
    try {
        const data = await Movie.findAll();
        res.render('movies/index', {
            data: data
        });
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.add = async (req, res) => {
    try {
        res.render('movies/add');
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.store = async (req, res) => {
    try {
        const create = Movie.create({
            title: req.body.title,
            genres: req.body.genres,
            year: req.body.year
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.edit = async (req, res) => {
    try {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('movies/edit', {
            data: movie
        })
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.update = async (req, res) => {
    try {
        const create = Movie.update({
            title: req.body.title,
            genres: req.body.genres,
            year: req.body.year
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
};
exports.delete = async (req, res) => {
    try {
        const create = Movie.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
};