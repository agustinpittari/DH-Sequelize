const db = require('./../database/models')
const { Op } = require("sequelize");

let controller = {
    index: (req, res) => {
        db.movies.findAll()
        .then(resultados =>{
            let peliculas = resultados
            res.render('movies', {peliculas: resultados})
        })
        .catch(err => {
            console.log(err)
        })
    },
    moviesDetail: (req, res) => {
        db.movies.findByPk(req.params.id)
        .then(resultado => {
            let pelicula = resultado
            res.render('moviesDetail', {pelicula: pelicula})
        })
        .catch(err => {
            console.log(err)
        })
    },
    new: (req,res) => {
        db.movies.findAll({
            order: [
                ['release_date', 'ASC']
            ],
            limit: 5
        })
        .then(resultados => {
            let peliculas = resultados
            res.render('moviesNew', {peliculas: peliculas})
        })
        .catch(err => {
            console.log(err)
        })
    },
    recommended: (req, res) => {
        db.movies.findAll({
            where: {
                rating:{
                    [Op.gte]: 6
                }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(resultados => {
            let peliculas = resultados
            res.render('moviesRecommended', {peliculas: peliculas})
        })
        .catch(err => {
            console.log(err)
        })
    },
    search: (req, res) => {
        db.movies.findAll({
            where: {
                title: {
                    [Op.substring]: req.body.search
                }
            },
            order: [
                [req.body.ordenar, 'DESC']
            ]
        })
        .then(resultados => {
            let peliculas = resultados
            let criterio = req.body.ordenar
            res.render('moviesSearch', {peliculas: peliculas, criterio:criterio})
            console.log(req.body);
            
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = controller