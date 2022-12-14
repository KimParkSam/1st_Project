// 샘플용
const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        'user2',
        {
            id: {
                type: DataTypes.STRING(15),
                allowNull: false,
                primaryKey: true
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(20)
            }
        },
        {
            tableName: 'USER2',
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = User;
