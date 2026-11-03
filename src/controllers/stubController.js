// Contract-shaped stubs for endpoints whose business logic is out of scope for the scaffold.
// GAP: the ErrorResponse schema and per-endpoint status codes were not available to the
// scaffold. Stubs return 501 with { code, message, timestamp }; align with the real
// ErrorResponse once confirmed.
const notImplemented = (name) => (req, res) => {
  res.status(501).json({
    code: 'NOT_IMPLEMENTED',
    message: `${name} is not implemented yet`,
    timestamp: new Date().toISOString(),
  });
};

module.exports = { notImplemented };
