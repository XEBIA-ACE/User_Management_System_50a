// Business logic layer (C4: UserApplicationService). Logic out of scope for the scaffold.
class UserApplicationService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
}

module.exports = UserApplicationService;
