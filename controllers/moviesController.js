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
        db.movies.findByPk(req.params.id, {
            include: ["genero","actores"]
        })
        .then(pelicula => {
            res.render('moviesDetail', {pelicula: pelicula})
        })
        .catch(err => {
            console.log(err)
            res.send('oops')
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
            res.render('moviesSearch', {peliculas: peliculas})
            console.log(req.body);
            
        })
        .catch(err => {
            console.log(err)
        })
    },
    createForm: (req, res) => {
        db.genres.findAll()
        .then(genres => {
        res.render('moviesCrear', {genres: genres})
        })
    },
    create: (req, res) => {
        db.movies.create({
            title: req.body.title,
            rating:  req.body.rating,
            release_date:  req.body.release_date,
            awards:  req.body.awards,
            length:  req.body.length,
            genre_id: req.body.genre
        })
        .then(pelicula => {
            res.redirect('/movies')
        })
    },
    editForm: (req,res) => {
        db.movies.findByPk(req.params.id)
        .then(pelicula => {
            res.render('moviesEditar', {pelicula: pelicula})
        })
        
    },
    edit: (req,res) => {
        db.movies.update({
            title: req.body.title,
            rating:  req.body.rating,
            release_date:  req.body.release_date,
            awards:  req.body.awards,
            length:  req.body.length
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(pelicula => {
            res.redirect('/movies/detail/' + req.params.id)
        })
        .catch(error => {
            console.log(error)
        })
    },
    delete: (req, res) => {
        db.movies.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(pelicula => {
            res.redirect('/movies')
        })
        .catch(error => {
            console.log(error)
        })
    }
}

module.exports = controller