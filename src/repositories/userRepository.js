// Data access layer (C4: UserRepository). Queries are out of scope for the scaffold.
const { getPool } = require('../db/pool');

class UserRepository {
  constructor(pool = getPool) {
    this.getPool = pool;
  }
  // GAP: schema/queries not specified (findByEmail, create, ...); to be added in later stories.
}

module.exports = UserRepository;
