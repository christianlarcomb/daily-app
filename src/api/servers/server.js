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

/* TODO: Fix this timeout middleware to function properly! */
/* Fix this middleware */
/*
    app.use((req, res) =>
    {
        res.setTimeout(30000, () =>
        {
            console.log({
                'Daily Response': {
                    status: 408,
                    statusText: 'Request has timed out',
                }
            })

            res.status(408).send({
                'Daily Response': {
                    status: 408,
                    statusText: 'Request has timed out',
                }
            }).end();
        })
    })
 */

/* MongoDB Connection */
/* TODO: Change the dbName to DailyApp once prepared */
mongoose.connect('mongodb+srv://admin:'
    +process.env.MONGODB_CLUSTER_PASS+
    '@cluster0-zxxok.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Juubii'
    })

// USER MONGO SCHEMA
const User = require('../models/user')


/* ROUTES */
/*************************************************************************************************/

// Gets the account panels and is authorized with middle wear
app.get('/api/v1/panels/@me', authenticateToken, (req, res) =>
{
    res.status(200).send({
        'Daily Response': {
            status: 200,
            statusText: 'Panel Data Retrieval Success',
            user: req.user
        }
    })
})

// Creating a new user
app.post('/api/v1/users/create', reCaptchaVerification, mongodbDataUpload, async (req, res) =>
{
    try
    {
        /* Upon Middleware Success: Generate access token and return it as a response! */
        const accessToken = jwt.sign(req.user.toObject(), process.env.ACCESS_TOKEN_SECRET)

        console.log({
            'Daily Response': {
                status: 201,
                statusText: 'Account Creation Success',
                access_token: accessToken
            }
        })

        res.status(201).send({
            'Daily Response': {
                status: 201,
                statusText: 'Account Creation Success',
                access_token: accessToken
            }
        }).end()

    } catch (e)
    {
        console.log({
            'Daily Response': {
                status: 500,
                statusText: 'Critical Request Error'
            }
        })

        res.status(500).send({
            'Daily Response': {
                status: 500,
                statusText: 'Critical Request Error'
            }
        })
        return res.end()
    }
})

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

async function mongodbDataUpload(req, res, next) {

    console.log('MongoDB: Encrypting data then uploading...')

    // Hashing the users password through the request
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    // Creating the user mongo object from the User schema
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        name: req.body.name,
        username: req.body.username,
        date_created_epoch: "4572524574545",
        address:
            {
                street: '',
                apt: '',
                city: '',
                state: '',
                postal: '',
                country: '',
            },
        password: hashedPassword,
        memberships:
            {
                student: false,
                lite: false,
                pro: false
            }
    })

    user.save()

        .then(mongoRes => {

            /* Status Notification to Console */
            console.log({
                'Daily Response': {
                    status: 200,
                    statusText: 'MongoDB Success',
                    results: mongoRes,
                }
            })

            req.user = user
            next()
        })

        .catch(err => {

            /* Status Notification to Console */
            console.log({
                'Daily Response': {
                    status: 501,
                    statusText: 'MongoDB Error',
                    errors: err,
                }
            })

            /* Status Notification to Request - Ending Request */
            res.status(501).send({
                'Daily Response': {
                    status: 501,
                    statusText: 'MongoDB Error',
                    errors: err,
                }
            }).end()
        })

}

/*
* Responsible for user authentication with Java Web Tokens
* @param req
* @param res
* @param next
*
* @returns authenticated user as req
*/
function authenticateToken(req, res, next)
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
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>
        {
            // Check if their was an error validating the token
            if(err) return res.status(403).send('Invalid Token').end()

            // Set the req user as the user who sent the auth token
            req.user = user

            // Exit authentication flow
            console.log('Request authentication continuing even after failing...')
            next()
        })

    }
}

// Starting the server on this port
app.listen(8080, () => {
    console.log({
        'Daily Response': {
            message: 'Daily Node.js Backend is Live!',
        }
    })
})