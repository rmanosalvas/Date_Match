module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
   });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
}