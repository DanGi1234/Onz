const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const post = sequelize.define( 'posts',{
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
},
{
	tableName: 'posts',
	createdAt: false,
	updatedAt: false
});

module.exports = post;
