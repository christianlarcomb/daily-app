// Imported to utilize dot env
require('dotenv').config()

// Necessary imports
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const axios = require('axios')

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

        /* Checking MongoDB Collection for Refresh Tokens. */
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

                res.status(401).send({
                    'Daily Response': {
                        status: 401,
                        message: 'Refresh token not found.',
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

app.post('/api/v1/users/login', reCaptchaVerification, verifyUserPassword, (req, res) =>
{
    res.status(200).send({
        'Daily Response': {
            status: 200,
            message: "Login success!",
            access_token: req.accessToken,
            refresh_token: req.refreshToken
        }
    }).end()
})

async function verifyUserPassword(req, res, next)
{
    const email = req.body.email
    const password = req.body.password

    console.log("Email Provided:",email)
    console.log("Password Provided:",password)

    /* If either of the required fields are missing, return error. */
    if(email !== undefined && password !== undefined)
    {
        /* Debug */
        console.log("Both the password and email were not empty!")
        console.log("Email Provided:", email)

        /* Locate the user in MongoDB */
        User.find((err, docs) => {
            docs.filter((doc) => doc.credentials.emails.account === email)
        })

            .exec()

            .then(async function(doc)
            {
                // Trying comparing the passwords and setting the req variable | catch otherwise
                if(doc === undefined || doc === [] || doc === null){

                    return res.status(404).send({
                        'Daily Response': {
                            status: 404,
                            errors: [
                                {
                                    message: 'Document not found!'
                                }
                            ],
                        }
                    }).end()

                } else {

                    try
                    {

                        /* Debug */
                        //console.log("Document:",doc)

                        /* Getting the user object */
                        const { _id, credentials, meta } = doc[0].toObject()

                        /* Filtered Object for JSON Web-Token */
                        const JWTObject =
                            {
                                sub: "user",
                                uuid: _id,
                                iat: meta.date_created_epoch,
                                admin: false
                            };

                        /* Checking the credentials provided by request against MongoDB */
                        if(await bcrypt.compare(req.body.password, credentials.core.password))
                        {

                            // Serializing the user if found and sending it back as an access token
                            const accessToken = generateAccessToken(JWTObject)
                            const refreshToken = jwt.sign(JWTObject, process.env.REFRESH_TOKEN_SECRET)

                            // Set user variable
                            req.accessToken = accessToken
                            req.refreshToken = refreshToken

                            next()

                        } else {
                            return res.status(401).send({
                                'Daily Response': {
                                    status: 401,
                                    errors: [
                                        {
                                            message: 'Invalid credentials.'
                                        }
                                    ],
                                }
                            }).end()
                        }

                    } catch (e) {
                        console.log(e)
                        return res.status(500).send('Fatal Server Error Caused the request to cancel.').end()
                    }
                }



            })

            .catch(err => res.status(500).send('Gate 3').end())

    } else {

        console.log("Either the email or the password was empty!")
        res.status(400).send({
            'Daily Response': {
                status: 400,
                errors: [
                    {
                        message: 'Improper or missing credentials.'
                    }
                ],
            }
        }).end();

    }


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

async function reCaptchaVerification(req, res, next)
{

    // Getting the reCAPTCHA token from the request
    const authHeader = req.headers['authorization']
    // Parsing the authentication token from reCAPTCHA
    const reCaptchaToken = authHeader && authHeader.split(' ')[1]

    // Check if the token is there
    if(reCaptchaToken == null)
    {

        /* Status Notification to Console */
        console.log({
            'Daily Response': {
                status: 403,
                statusText: 'Google API Error',
                errors: [
                    {
                        message: 'Missing reCAPTCHA token.'
                    }
                ],
            }
        })

        /* Status Notification to Request - Ending Request */
        res.status(401).send({
            'Daily Response': {
                status: 403,
                statusText: 'Google API Error',
                errors: [
                    {
                        message: 'Missing reCAPTCHA token.'
                    }
                ],
            }
        }).end()

    } else {

        /* TODO: Perfect this Google verification request */
        try{

            /* Status Notification to Console */
            console.log('Verifying reCAPTCHA -> Posting request to Google API...')

            /* Creating the post request URL with required parameters */
            const site_url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY_V2}&response=${reCaptchaToken}`

            /* Attempting the post request and handling the statuses accordingly */
            await axios.post(site_url, {},
                {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                })

                .then(googleResponse =>
                {
                    /* Getting success boolean from Google's API response */
                    const verifiedByGoogle = googleResponse.data.success

                    /* DEBUG: Checking Googles response status */
                    //console.log("Google Response:", googleResponse)

                    /* If the token is not verified */
                    if (!verifiedByGoogle)
                    {

                        /* Status Notification to Console */
                        console.log({
                            'Daily Response': {
                                status: 403,
                                statusText: 'Google API Error',
                                errors: [
                                    {
                                        message: 'Invalid reCAPTCHA token.'
                                    }
                                ],
                            }
                        })

                        /* Status Notification to Request - Ending Request */
                        res.status(403).send({
                            'Daily Response': {
                                status: 403,
                                statusText: 'Google API Error',
                                errors: [
                                    {
                                        message: 'Invalid reCAPTCHA token.'
                                    }
                                ],
                            }
                        }).end()

                    } else {

                        /* Status Notification to Console */
                        console.log({
                            'Daily Response': {
                                status: 200,
                                statusText: 'Google API Success',
                                errors: [
                                    {
                                        message: 'Valid reCAPTCHA token.'
                                    }
                                ],
                            }
                        })

                        /* Return Control to Parent or Middleware Function*/
                        next()
                    }
                })

                .catch(err =>
                {
                    /* Status Notification to Console */
                    console.log({
                        'Daily Response': {
                            status: 500,
                            statusText: 'Google API Critical Error',
                            errors: err,
                        }
                    })

                    /* Status Notification to Request - Ending Request */
                    res.status(500).send({
                        'Daily Response': {
                            status: 500,
                            statusText: 'Google API Critical Error',
                            errors: err,
                        }
                    }).end()

                })

        } catch (e) {
            /* Status Notification to Console */
            console.log({
                'Daily Response': {
                    status: 500,
                    statusText: 'Internal Server Error',
                    errors: e,
                }
            })

            res.status(500).send({
                'Daily Response': {
                    status: 500,
                    statusText: 'Internal Server Error',
                    errors: e,
                }
            }).end()
        }
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