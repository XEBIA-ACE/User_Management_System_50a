// Single place that reads process.env. Other modules must import this config.
// GAP: no config keys are specified; names below are conventional assumptions.
// Defaults are non-secret local-dev values only; DB credentials and JWT secret default to empty
// and must be supplied via the environment for anything beyond /health.
const int = (value, fallback) => {
  const n = Number.parseInt(value, 10);
  return Number.isNaN(n) ? fallback : n;
};

const env = process.env;

const config = Object.freeze({
  port: int(env.PORT, 3000),
  db: Object.freeze({
    host: env.DB_HOST || 'localhost',
    port: int(env.DB_PORT, 3306),
    user: env.DB_USER || '',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || '',
    connectionLimit: int(env.DB_CONNECTION_LIMIT, 10),
  }),
  jwt: Object.freeze({
    secret: env.JWT_SECRET || '',
    accessExpiresIn: env.JWT_ACCESS_EXPIRES_IN || '15m',
    refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN || '7d',
  }),
});

module.exports = config;
