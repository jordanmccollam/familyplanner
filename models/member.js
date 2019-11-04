module.exports = function(sequelize, DataTypes) {
    var Member = sequelize.define("Member", {
        name: DataTypes.STRING,
        color: DataTypes.STRING
    });

    Member.associate = function(models) {
        Member.belongsTo(models.Family, {
            foreinKey: {
                allowNull: false
            }
        });
    };

    return Member;
};