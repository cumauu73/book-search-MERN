const connection = require('../config/connection')
const { User } = require('../models')

connection.once('open', async () => {
    await User.deleteMany()
    await User.create({
        username: 'cuma',
        email: 'cuma@email.com',
        password: '00000'
    })
    console.log("SEEDS DONE")
    process.exit(0)
})