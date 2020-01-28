const db = require('./../database/models')
const { Op } = require("sequelize");

let controller = {
    detail: (req, res) => {
        db.actors.findByPk(req.params.id,
            {include: ["peliculas"]})
        .then(actor => {
            res.render('actorDetail', {actor: actor})
        })

    }
}

module.exports = controller