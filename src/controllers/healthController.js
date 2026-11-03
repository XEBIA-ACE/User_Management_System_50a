const healthService = require('../services/healthService');

// GAP: HealthStatus schema only names status/timestamp/uptimeSeconds; the 'UP' value and
// ISO-8601 timestamp format are assumptions.
function getHealth(req, res) {
  res.status(200).json(healthService.getHealthStatus());
}

module.exports = { getHealth };
