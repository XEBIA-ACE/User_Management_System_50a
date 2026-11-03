// API layer (C4: RegistrationController). Stubs only.
const { notImplemented } = require('./stubController');

module.exports = {
  register: notImplemented('POST /api/v1/auth/register'),
  registerSocial: notImplemented('POST /api/v1/auth/register/social'),
  verifyEmail: notImplemented('POST /api/v1/auth/verify-email'),
  verificationStatus: notImplemented('GET /api/v1/auth/verification-status'),
};
