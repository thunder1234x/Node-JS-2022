const express = require('express');
const jwtRouter = express.Router();

const authenticationProvider = require('../middlewares/authProv')

const {
    login,
    dashboard
}  = require('../functions/jwtFunc')

jwtRouter.route('/login').post(login);
jwtRouter.route('/dashboard').get(authenticationProvider,dashboard)

module.exports = jwtRouter;