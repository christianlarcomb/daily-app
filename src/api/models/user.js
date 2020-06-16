const mongoose = require('mongoose')

/* TODO: Enhance the user schema by adding many more data points. */
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:String,
    name: String,
    date_created_epoch: String,
    address:
        {
            street: String,
            apt: String,
            city: String,
            state: String,
            postal: String,
            country: String
        },
    password:String,
    memberships:
        {
            student: Boolean,
            lite: Boolean,
            pro: Boolean
        }
})

module.exports = mongoose.model('User', userSchema, 'Users')