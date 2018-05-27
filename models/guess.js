module.exports = function(sequlize, DataTypes) {
    var Data = sequelize.define("Data", {
        data_content: DataTypes.STRING,
        boolean_value: {
            type: DataTypes.BOOLEAN,
            deafaultValue: false
        }
    });
    return Data;
};