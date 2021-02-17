const { sequelize } = require('./models/index.js');

const driver = () => {
    sequelize.sync().then(() => {
        console.log('초기화 완료');
    }).catch((err) => {
        console.error('초기화 실패');
        console.error(err);
    });
};
driver();


/* // async/aswait
const { sequelize } = require('./models/index.js');

const driver = async () => {
    try {
        await sequelize.sync();
    } catch (err) {
        console.error('초기화 실패');
        console.error(err);
        return;
    }

    console.log('초기화 완료');
};
driver();
*/

