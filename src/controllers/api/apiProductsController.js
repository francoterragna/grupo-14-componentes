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

    store: (req, res) => {
        return res.json(req.file)
        // db.Product.create({
        //     name: req.body.name,
        //     description: req.body.description,
        //     discount: req.body.discount,
        //     category_id: req.body.category, 
        //     price: req.body.price,
        //     stock: req.body.stock
        //    })
        //    .then((productoCreado)=>{
        //        let imageName;
        //        if(req.files != undefined){
        //            imageName = req.files;
        //        }
               
        //        imageName.forEach(image => {
        //            db.Image.create({
        //              name: image.filename,
        //              product_id: productoCreado.id 
        //            })
        //        });
        //    })
        //    .then(productoNuevoApi => {
        //        return res.status(200).json({
        //            data: productoNuevoApi,
        //            status: 200,
        //            created: 'ok'
        //        })
        //    })
    },
    delete: (req,res) => {
        db.Image.destroy(
            {
                where: {product_id: req.params.id},
                force: true
            }
        )
        .then(() => {
            db.Product.destroy(
            {
                where: {id: req.params.id},
                force: true
            })
            }       
            )
            .then((response) => {
                return res.json(response)
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