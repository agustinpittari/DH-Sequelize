

module.exports = (sequelize, dataTypes) => {
    
    let alias = "movies"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,                
        },
        title: {
            type: dataTypes.STRING,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            alowNull: true
        },
        release_date : {
            type: dataTypes.DATE,
            alowNull: true
        },
        genre_id : {
            type: dataTypes.INTEGER,
            alowNull: false
        }
    };

    let config = {
        tableName: 'movies',
        underscored: true,
        timestamps: false
    }
    
    const Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = models => {
        Pelicula.belongsTo(models.genres, {
            as: 'genero',
            foreignKey: 'genre_id'
        })
        
        Pelicula.belongsToMany(models.actors, {
            through: "actor_movie",
            as: 'actores',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }

    return Pelicula
}
