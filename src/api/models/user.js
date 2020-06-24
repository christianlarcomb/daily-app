const mongoose = require('mongoose')

/* TODO: Enhance the user schema by adding many more data points. */
const userSchema = mongoose.Schema({

    _id: Number,

    credentials: {

        emails: {
            account: String,
            business: String
        },

        name: String,
        password:String,

        address:
            {
                street: String,
                apt: String,
                city: String,
                state: String,
                postal: String,
                country: String
            },

        phone_numbers: {
            personal: Number,
            home: Number,
            work: Number
        }
    },

    date_created_epoch: String,

    status:
        {

            restrictions: {
                banned: Boolean,
                visible: Boolean,
                muted: Boolean
            },

            verification: {
                email: Boolean,
                status: Boolean,
                company: Boolean,
                address: Boolean
            },

            security_clearance: {
              op:        Boolean,
              admin:     Boolean,
              moderator: Boolean,
              developer: Boolean
            },

            subscription:
                {
                    lite: Boolean,
                    pro: Boolean,
                    pro_plus: Boolean,
                    elite: Boolean
                }
        }
})

module.exports = mongoose.model('User', userSchema, 'Users')