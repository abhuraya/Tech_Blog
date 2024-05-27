const sequelize = require('../config/connections');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
//const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData){
        await Blog.create({
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].isSoftDeleted,
        });
    }
};

seedDatabase();