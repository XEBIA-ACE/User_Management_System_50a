// API layer for session endpoints. Stubs only.
const { notImplemented } = require('./stubController');

module.exports = {
  login: notImplemented('POST /api/v1/auth/login'),
  logout: notImplemented('POST /api/v1/auth/logout'),
  verifyToken: notImplemented('GET /api/v1/auth/verify-token'),
  refresh: notImplemented('POST /api/v1/auth/refresh'),
};
