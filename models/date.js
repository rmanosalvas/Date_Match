module.exports = function (sequelize, DataTypes) {
    const Date = sequelize.define("Date", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Date"
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

    Date.associate = function (models) {
        Date.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Date;
};