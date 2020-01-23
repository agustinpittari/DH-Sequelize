

module.exports = (sequelize, dataTypes) => {
    
    let alias = "movies"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,                
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
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
        }
    };

    let config = {
        tableName: 'movies',
        underscored: true
    }
    
    const Pelicula = sequelize.define(alias, cols, config)

    return Pelicula
}
