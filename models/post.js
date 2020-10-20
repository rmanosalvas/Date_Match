module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Post"
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        interested: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Post.hasMany(models.Comment,{
            onDelete: "cascade",
        });
    };

    return Post;
};