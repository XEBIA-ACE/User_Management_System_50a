const config = require('./config');
const { createApp } = require('./app');
const { closePool } = require('./db/pool');

const server = createApp().listen(config.port, () => {
  console.log(`user-management-service listening on port ${config.port}`);
});

function shutdown() {
  server.close(async () => {
    await closePool();
    process.exit(0);
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
