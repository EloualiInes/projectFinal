const modelUser = require('../models/User.model');

// Sign up user with your pseudo, password and email
// return if user well added
module.exports.createUser = (req, res) => {
    modelUser.createUser(
        "Alice", "aze", "dzja@gmail.com").then((result) => {
            res.send({"execute" : result})
        })
}