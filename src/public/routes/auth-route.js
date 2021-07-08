var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/auth-controller');
const requireLogin = require('../middleware/requireLogin');

/** signin */
router.post('/api/signin', auth_controller.signin)

/** click forgot password */
router.put('/api/forgot-password-user', auth_controller.forgot_password)

/** link reset password */
router.put('/api/reset-password-user', auth_controller.reset_password)

/** change your password */
router.put('/api/new-password-user', requireLogin ,auth_controller.change_password)

/** show profile */
router.get('/api/profile', requireLogin, auth_controller.get_profile)

/** logout user */
router.get('/api/logout', auth_controller.logout);

module.exports = router