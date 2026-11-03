const { notImplemented } = require('./stubController');

// GAP: metrics payload (uptime, userCount) is unspecified and userCount needs the DB.
module.exports = { getMetrics: notImplemented('GET /metrics') };
