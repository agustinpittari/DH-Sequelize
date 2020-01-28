module.exports =(sequelize, dataTypes) => {

    let alias = "genres"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,                
        },
        name: {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: 'genres',
        timestamps: false
    }
    
    const Genero = sequelize.define(alias, cols, config)

    Genero.associate = models => {
        Genero.hasMany(models.movies, {
            as: 'peliculas',
            foreignKey: 'genre_id'
        })
    }

    return Genero

}

