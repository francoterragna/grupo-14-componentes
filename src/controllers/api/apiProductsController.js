const db = require ('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(products => {
            db.Category.findAll()
            .then(category => {
                db.Image.findAll()
                .then(image => {
                        let remeras = 0;
                        let buzos = 0;
                        let pantalones = 0;
                        let camisas = 0;
                        let mallas = 0;
                        let medias = 0;
                        let gorras = 0;
                        let camperas = 0;
                        let bermudas = 0;
                        let accesorios = 0;
                    products.map(porCategoria => {
                        if(porCategoria.category_id == 1){
                            remeras ++;
                        }else if(porCategoria.category_id == 2){
                            buzos ++;
                        }else if(porCategoria.category_id == 3){
                            pantalones ++;
                        }else if(porCategoria.category_id == 4){
                            camisas ++;
                        }else if(porCategoria.category_id == 5){
                            mallas ++
                        }else if(porCategoria.category_id == 6){
                            medias ++;
                        }else if(porCategoria.category_id == 7){
                            gorras ++;
                        }else if(porCategoria.category_id == 8){
                            camperas ++
                        }else if(porCategoria.category_id == 9){
                            bermudas ++;
                        }else if(porCategoria.category_id == 10){
                            accesorios ++;
                        }
                    })
                    return res.status(200).json({
                        total: products.length,
                        category: category.length,
                        remeras: remeras,
                        buzos: buzos,
                        pantalones: pantalones,
                        camisas: camisas,
                        mallas: mallas,
                        medias: medias,
                        gorras: gorras,
                        camperas: camperas,
                        bermudas: bermudas,
                        accesorios: accesorios,
                        data: products,
                        status: 200
                })
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