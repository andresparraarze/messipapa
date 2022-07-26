const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');
const bcrypt = require('bcrypt');

const User = sequelizeConnection.define('User', {

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 20],
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8, 16]
        }
    }
},{
    Sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscore: true
});

User.beforeCreate(async user => {
    const data = user.dataValues;
    data.password = await bcrypt.hash(data.password, 15);
});
// await to bcrypt
module.exports = User;