const db = require ('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            db.Category.findAll()
            .then(category => {
                return res.status(200).json({
                    total: products.length,
                    category: category.length,
                    data: products,
                    status: 200
            })
        })
        })
    },

    show: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            })

        })
    },
    search: (req,res) => {
        db.Product.findAll({
            where: {
                name: { [Op.like]:'%' + req.query.keyword + '%'}
            }
        })
        .then(products => {
            // return res.status(200).json(products);
            if(products.length > 0){
                return res.status(200).json({
                    data: products,
                    status: 200
                });
            }else{
                return res.status(200).json({
                    data:'No hay resultados para tu búsqueda',
                    status: 200
                })
            }
        })
    }
}