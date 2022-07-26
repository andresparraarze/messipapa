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

User.beforeCreate(user => {
    user.password = await bcrypt.hash(user.password, 15);
});

module.exports = User;