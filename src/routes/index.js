const express = require('express');
const health = require('../controllers/healthController');
const metrics = require('../controllers/metricsController');
const registration = require('../controllers/registrationController');
const auth = require('../controllers/authController');
const user = require('../controllers/userController');

const router = express.Router();

router.get('/health', health.getHealth);
router.get('/metrics', metrics.getMetrics);

router.post('/api/v1/auth/register', registration.register);
router.post('/api/v1/auth/register/social', registration.registerSocial);
router.post('/api/v1/auth/login', auth.login);
router.post('/api/v1/auth/logout', auth.logout);
router.get('/api/v1/auth/verify-token', auth.verifyToken);
router.post('/api/v1/auth/verify-email', registration.verifyEmail);
router.get('/api/v1/auth/verification-status', registration.verificationStatus);
router.post('/api/v1/auth/refresh', auth.refresh);
router.get('/api/v1/users/me', user.getMe);

module.exports = router;
