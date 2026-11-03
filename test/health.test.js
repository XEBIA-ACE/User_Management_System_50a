const { test, before, after } = require('node:test');
const assert = require('node:assert');
const { createApp } = require('../src/app');

let server;
let base;
before(async () => {
  server = createApp().listen(0);
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

test('AC-1: GET /health responds with HealthStatus without a database', async () => {
  const res = await fetch(`${base}/health`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.strictEqual(body.status, 'UP');
  assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
  assert.ok(Number.isInteger(body.uptimeSeconds) && body.uptimeSeconds >= 0);
});

test('stub endpoint returns an error-shaped body; bad JSON gives INVALID_JSON', async () => {
  const res = await fetch(`${base}/api/v1/auth/login`, { method: 'POST' });
  assert.strictEqual(res.status, 501);
  assert.strictEqual((await res.json()).code, 'NOT_IMPLEMENTED');
  const bad = await fetch(`${base}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: '{',
  });
  assert.strictEqual(bad.status, 400);
  assert.strictEqual((await bad.json()).code, 'INVALID_JSON');
});
