const Github = require("./github");

class GitHubRepository {
  getUsers({ since }) {
    if (since && !Number.isInteger(Number.parseInt(since)))
      throw new Error("Invalid since parameter, please enter a number");
    return new Github().getUsers(since);
  }
  getUserDetails({ username }) {
    if (!username) throw new Error("Invalid username parameter");
    return new Github().getUserDetails(username);
  }
  getUserRepository({ username }) {
    if (!username) throw new Error("Invalid username parameter");
    return new Github().getUserRepository(username);
  }
}
module.exports = GitHubRepository;
