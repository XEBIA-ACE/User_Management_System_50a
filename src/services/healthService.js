function getHealthStatus() {
  return {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  };
}

module.exports = { getHealthStatus };
