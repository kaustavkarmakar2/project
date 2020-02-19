'use strict';
module.exports = (sequelize, DataTypes) => {
  const  Post= require('./../models/post');
  const users = sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: DataTypes.STRING,
    phone_no: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email_id: DataTypes.STRING,
    address: DataTypes.STRING,
    roles_id: {
      type:DataTypes.INTEGER,
      references: {
      model: Post,
      key: "roles_id"
      }
    }
  },{timestamps:false,freezeTableName:true});
  users.associate = function(models) {
    // associations can be defined here
    users.belongsTo(models.Post, {as:'post',foreignKey: 'roles_id'});
  };
  return users;
};