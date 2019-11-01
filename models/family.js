module.exports = function(sequelize, DataTypes) {
    var Family = sequelize.define("Family", {
        name: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Family;
};