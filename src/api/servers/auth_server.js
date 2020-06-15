// Imported to utilize dot env
require('dotenv').config()

// Necessary imports
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

// Express app initialized
const app = express()
// Allows your server to utilize json
app.use(express.json())

// Connecting to the database
mongoose.connect('mongodb+srv://admin:' +process.env.MONGODB_CLUSTER_PASS+'@cluster0-zxxok.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Juubii'
    })

// USER MONGO SCHEMA
const User = require('../models/user')

/*
* Utilizes complex password encryption to verify the credentials of the logging in user.
*
* @param { email: ..., password:... }
*
* @async
*/
app.post('/api/v1/users/login', verifyUserPassword, (req, res) =>
{

    // After verifying the user, send back the access tokens.
    res.status(200).send({ accessToken: req.accessToken, refreshToken: req.refreshToken})

})

async function verifyUserPassword(req, res, next)
{
    User.find({email: req.body.email})
        .exec()
        .then(async function(doc)
        {
            // Trying comparing the passwords and setting the req variable | catch otherwise
            try
            {

                // If the passwords match
                if(await bcrypt.compare(req.body.password, doc[0].password))
                {

                    // Serializing the user if found and sending it back as an access token
                    const accessToken = generateAccessToken(doc[0].toObject())
                    const refreshToken = jwt.sign(doc[0].toObject(), process.env.REFRESH_TOKEN_SECRET)

                    // Set user variable
                    req.accessToken = accessToken
                    req.refreshToken = refreshToken

                    next()

                } else {
                    return res.status(500).send('Invalid Credentials')
                }

            } catch (e) { return console.log(e)}

        })

        .catch(err => res.status(500).send('Gate 3'))
}

function generateAccessToken(user)
{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
}

// Starting the server on this port
app.listen(8090)