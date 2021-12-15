module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'sizes',
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config)
    Size.associate = models =>{
        Size.belongsToMany(models.Product,{
            as: 'products',
            foreignKey: 'product_id',
            through: 'product_size',
            otherKey: 'size_id'
        })
    }

    return Size;
} 