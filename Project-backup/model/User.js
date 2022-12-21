// 샘플용
const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull : false
            },
            e_mail : {
                type : DataTypes.STRING(20),
                allowNull : false                
            }
        },
        {
            tableName: 'USER',
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = User;
