module.exports = (sequelize, DataTypes) => {
    const newPurchase = sequelize.define("new_purchase", {
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        book_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        purchase_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return newPurchase;
};
