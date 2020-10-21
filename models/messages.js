module.exports = function (sequelize, DataTypes) {
    const Message = sequelize.define("Message", {
        msgID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isVisable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
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