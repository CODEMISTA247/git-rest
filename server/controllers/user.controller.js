const User = require('../models/user')

module.exports = {

    allUsers: (req, res) => {
        User.find()
            .then((allUsers) => {
                res.json(allUsers)
            })
            .catch((err) =>  {
                res.status(500).json(err)
            })
    },

    getOneUser: (req, res) => {
        User.findOne({ _id: req.params.id})
            .then((oneUser) => {
                res.json(oneUser)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}