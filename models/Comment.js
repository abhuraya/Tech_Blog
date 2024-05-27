const { Model,  DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_description: {
            type: DataTypes.STRING,
        },
        comment_date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key:'id',
            },
        },
        user_name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);


module.exports = Comment;