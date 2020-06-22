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

/* Access Header Middleware */
/* TODO: Adjust these access restrictions before release */
app.use((req, res, next) =>
{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

// Connecting to the database
mongoose.connect('mongodb+srv://admin:'+process.env.MONGODB_CLUSTER_PASS+'@cluster0-zxxok.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'DailyApp'
    })

// USER MONGO SCHEMA
const User = require('../models/user')
const RefreshToken = require('../models/refresh-tokens')

app.get('/api/v1/authentication/gen/access-token', authenticateRefreshToken, (req, res) => {

    // Getting the reCAPTCHA token from the request
    const authHeader = req.headers['authorization']
    // Parsing the authentication token from reCAPTCHA
    const refreshToken = authHeader && authHeader.split(' ')[1]

    /* Checking whether the refresh token is there and whether it exists on the server side */
    if(refreshToken != null) {

        /* TODO: Implement database logic to check against */
        RefreshToken.find({refresh_token: refreshToken})
            .exec()

            /* It was found */
            .then(() => {

                /* The refresh token is found - attempting to generate an access token */
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {

                    if(err)
                    {

                        return res.status(500).send({
                            'Daily Response': {
                                status: 500,
                                message: 'Could not verify refresh token.'
                            }
                        }).end()

                    } else {

                        /* Creating access token with a simplified user object */
                        const accessToken = generateAccessToken(user)

                        return res.status(200).send({
                            'Daily Response': {
                                status: 200,
                                message: 'Access Token Generated',
                                access_token: accessToken
                            }
                        }).end()
                    }

                })
            })

            .catch(e => {

                res.status(403).send({
                    'Daily Response': {
                        status: 403,
                        message: 'Invalid Refresh Token.',
                        error: e
                    }
                }).end()

            })

    } else {

        return res.status(401).send({
            'Daily Response': {
                status: 401,
                message: 'Missing Refresh Token.'
            }
        }).end()

    }
})

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

                /* Raw Object for Verification */
                const userObjectRaw = doc[0].toObject()

                /* Filtered Object for JSON Web-Token */
                const userObjectFiltered =
                {
                    ...userObjectRaw,
                    password: null
                }

                /* Debugging the doc */
                console.log(userObjectFiltered)

                // If the passwords match
                if(await bcrypt.compare(req.body.password, userObjectRaw.password))
                {

                    // Serializing the user if found and sending it back as an access token
                    const accessToken = generateAccessToken(doc[0].toObject())
                    const refreshToken = jwt.sign(doc[0].toObject(), process.env.REFRESH_TOKEN_SECRET)

                    // Set user variable
                    req.accessToken = accessToken
                    req.refreshToken = refreshToken

                    next()

                } else {
                    return res.status(500).send('Invalid Credentials').end()
                }

            } catch (e) {
                console.log(e)
                return res.status(500).send('Fatal Server Error Caused the request to cancel.').end()
            }

        })

        .catch(err => res.status(500).send('Gate 3').end())
}

function authenticateRefreshToken(req, res, next)
{
    const authHeader = req.headers['authorization']

    // Check if the authHeader exists -> set info to token variable
    const token = authHeader && authHeader.split(' ')[1]

    // Check if the token is there
    if(token == null)
    {
        /* Status Notification to Console */
        console.log({
            'Daily Response': {
                status: 401,
                statusText: 'Daily Error',
                errors: [
                    {
                        message: 'Missing Authentication Header'
                    }
                ],
            }
        })

        /* Status Notification to Console */
        return res.status(401).send({
            'Daily Response': {
                status: 401,
                statusText: 'Daily Error',
                errors: [
                    {
                        message: 'Missing Authentication Header'
                    }
                ],
            }
        })

    } else {

        /* Verifying Java Web Token */
        /* TODO: Check the verification process of the JWT and make sure they're functioning */
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>
        {
            // Check if their was an error validating the token
            if(err)
            {

                return res.status(403).send({
                    'Daily Response': {
                        status: 403,
                        statusText: 'Daily Error',
                        errors: [
                            {
                                message: 'Invalid Refresh Token'
                            }
                        ],
                    }
                }).end()

            } else {
                // Set the req user as the user who sent the auth token
                req.user = user

                next()
            }
        })
    }
}

/* Function handles generating a new refresh token */
function generateAccessToken(user)
{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h'})
}

// Starting the server on this port
app.listen(8090, () => {
    console.log({
        'Daily Response': {
            message: 'DailyApp authorization server is Live!',
        }
    })
})