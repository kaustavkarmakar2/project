'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = require('./../models').users;
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  },{timestamps:false,freezeTableName:true});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.users, {foreignKey: 'user_id'});
  };
  return Post;
};