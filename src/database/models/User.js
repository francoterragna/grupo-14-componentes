module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        first_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        email:{
            allowNull: false,
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        category: {
            allowNull: false,
            type: dataTypes.STRING
        },
        password:{
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    User.associate = models =>{
        User.belongsToMany(models.Product,{
            as: 'products',
            foreignKey: 'product_id',
            through: 'ventas_users',
            timestamps: false
        })}
    return User;
} 


//const fs = require('fs');

// const User = {
//     fileName: './data/users.json',
//     getData: function() {
//         return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
//     },

//     generateId: function(){
//         let allUsers = this.findAll();
//         let lastUser = allUsers.pop();
//         if(lastUser){
//             return lastUser.id + 1;
//         }
//         return 1;
//     },

//     findAll: function(){
//         return this.getData();
//     },

//     findByPk: function(id){
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser.id == id);
//         return userFound
//     },

//     findByField: function(field, text){
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser[field] == text);
//         return userFound;
//     },

//     create: function(userData){
//         let allUsers = this.findAll();
//         let newUser = {
//             id:this.generateId(),
//             ...userData
//         };
//         allUsers.push(newUser);
//         fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
//         return newUser;
//     },

//     // 5. Eliminar a un usuario de la DB
//     delete: function(id){
//         let allUsers = this.findAll();
//         let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
//         fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
//         return true;
//     }
// }

// module.exports = User;