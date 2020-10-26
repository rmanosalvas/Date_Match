const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first_name: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {//Signup & Profile
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orientation: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar:{//Signup & Profile
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://imgur.com/160Clta.png"
        },        
        gender: {//Signup & Profile
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {//Signup & Profile
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },             
        userPref1: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        userPref2: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        userPref3: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutMe1: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutMe2: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        aboutMe3: {// Profile only
            type: DataTypes.STRING,
            allowNull: true
        },
        location:{// Profile and DB only
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    User.associate = function (models) {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
        User.hasMany(models.Message, {
            onDelete: "cascade"
        });       
        User.belongsToMany(models.Match, 
            {through: 'id'},
            { foreignKey: 'id', allowNull: false }
        );
    }


    return User;

}