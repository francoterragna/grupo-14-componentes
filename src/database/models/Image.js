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
        tableName: 'img',
        timestamps: false
    }
    const Image = sequelize.define(alias, cols, config);
    Image.associate = models =>{
        Image.belongsTo(models.Product,{
            as: 'products',
            foreignKey: 'product_id'
        })
    }
    

    return Image;
} 