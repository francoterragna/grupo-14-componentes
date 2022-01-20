const db = require ('../../database/models');



module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then(users => {
            return res.status(200).json({
                count: users.length,
                users: users,
                status: 200
            })
        })
       
    },

    show: (req,res)=> {
        db.User.findByPk(req.params.id)
        .then(user =>{
            return res.status(200).json({
                data: user,
                status:200
            })
        })
    }

}