// MySQL / AWS RDS connection helper. Configured only from the config module.
// Lifecycle: the pool is created lazily on first getPool() (so /health never needs a DB),
// and must be released with closePool() on shutdown.
const mysql = require('mysql2/promise');
const config = require('../config');

let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      connectionLimit: config.db.connectionLimit,
      waitForConnections: true,
      // GAP: RDS TLS settings are not specified; add `ssl` options here if required.
    });
  }
  return pool;
}

async function closePool() {
  if (pool) {
    const p = pool;
    pool = null;
    await p.end();
  }
}

module.exports = { getPool, closePool };
