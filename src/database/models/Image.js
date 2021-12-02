module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'image',
        timestamps: false
    }
    const Image = sequelize.define(alias, cols, config)

    return Image;
} 