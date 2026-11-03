// C4: GlobalExceptionHandler. Never echoes internals or request data.
// GAP: ErrorResponse shape assumed as { code, message, timestamp }.
// eslint-disable-next-line no-unused-vars
function globalExceptionHandler(err, req, res, next) {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({
      code: 'INVALID_JSON',
      message: 'Request body is not valid JSON',
      timestamp: new Date().toISOString(),
    });
  }
  return res.status(500).json({
    code: 'INTERNAL_ERROR',
    message: 'Unexpected error',
    timestamp: new Date().toISOString(),
  });
}

module.exports = globalExceptionHandler;
