

module.exports = (sequelize, dataTypes) => {
    
    let alias = "actors"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,                
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1)
        }
    };

    let config = {
        tableName: 'actors',
        underscored: true,
        timestamps: false
    }
    
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = models => {
        Actor.belongsToMany(models.movies, {
            through: "actor_movie",
            as: 'actores',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Actor
}
