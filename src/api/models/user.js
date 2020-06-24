const mongoose = require('mongoose')

/* TODO: Enhance the user schema by adding many more data points. */
const userSchema = mongoose.Schema({

    _id: Number,

    credentials: {

        core: {
            username: String,
            password:String
        },

        identity: {
            name: String,
            sex: String,
            gender: String,
            age: Number,
            race: String
        },

        emails: {
            account: String,
            business: String
        },

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

    connectivity: {
        following: Array,
        followers: Array,
        subscribers: Array
    },

    meta: {
        ips: Array,
        devices: Array,
        geo_loc: String,
        date_created_epoch: Number
    },

    recovery: {
        email: String,
        phone: Number,
        recovery_codes: Array
    },

    status:
        {

            restriction: {
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
                    free: Boolean,
                    lite: Boolean,
                    pro: Boolean,
                    pro_plus: Boolean,
                    elite: Boolean
                }
        }
})

module.exports = mongoose.model('User', userSchema, 'Users')