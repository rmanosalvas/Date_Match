
// Messaging models to create user interaction
// NOT FINISHED

module.exports = function (sequelize, DataTypes) {
    const Message = sequelize.define("Message", {
        // msgID: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

    });
    
    Message.associate = function (models) {
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Message.belongsTo(models.Match, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Message;
}