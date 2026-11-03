const { notImplemented } = require('./stubController');

module.exports = {
  getMe: notImplemented('GET /api/v1/users/me'),
};
