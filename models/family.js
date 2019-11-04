module.exports = function(sequelize, DataTypes) {
    var Family = sequelize.define("Family", {
        name: DataTypes.STRING,
        password: DataTypes.STRING
    });

    Family.associate = function(models) {
        Family.hasMany(models.Member, {
            onDelete: "cascade"
        });
    };

    return Family;
};