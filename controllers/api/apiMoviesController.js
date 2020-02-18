const db = require('../../database/models')
const { Op } = require("sequelize");

let controller = {
    list: (req, res) => {
        db.movies.findAll()
        .then(movies => {
            res.json(movies)
        })
    },
    detail: (req, res) => {
        db.movies.findByPk(req.params.id)
            .then(pelicula => {
                res.json(pelicula)
            })     
        },
    create:(req,res) =>{
        res.status(201)
        } ,
    edit:(req,res) =>{
        res.status(200)
        } ,
    delete:(req,res) =>{
        res.status(200)
        } ,
    }
    
    module.exports = controller