module.exports = function (sequelize, DataTypes) {
    const Match = sequelize.define("Match", {
        user1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Match.associate = function (models) {
        Match.belongsToMany(models.User, 
        {through: 'UserId'},
        { foreignKey: 'id', allowNull: false }
        );
    };

    return Match;
};