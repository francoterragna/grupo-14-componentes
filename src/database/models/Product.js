module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        description: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);
    Product.associate = models => {
        Product.hasMany(models.Image, {
            as: 'img',
            foreignKey: 'product_id'
        })
        Product.belongsToMany(models.User, {
                as: 'users',
                foreignKey: 'user_id',
                through: 'ventas_users',
                timestamps: false
            })
    }
   
    

    return Product;
} 