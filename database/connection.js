const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgresql://postgres.cugbymsqoeolnetsdrbo:KWcRYuOz4tWvjNMM@aws-0-ap-south-1.pooler.supabase.com:6543/postgres')

// // 3a3j2hHDJ1TwbpK4
// KWcRYuOz4tWvjNMM

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./models/userModel')(sequelize, DataTypes)
db.task = require('./models/taskModel')(sequelize, DataTypes)

sequelize.sync({ alter: false }).then(() => {
    console.log('Migration completed successfully.')
})

module.exports = db