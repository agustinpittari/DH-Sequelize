const db = require('./../database/models')
const { Op } = require("sequelize");

let controller = {
    detail: (req, res) => {
        db.genres.findByPk(req.params.id,
            {include: ["genero"]})
        .then(genero => {
            res.render('generoDetail', {genero:genero})
        })

    }
}

module.exports = controller