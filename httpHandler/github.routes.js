const GitHubRepository = require("../repository/github.repository");
const gitHubRepository = new GitHubRepository();
const githubRoutes = require("express").Router();
const {
  getAllUsersAddress,
  getUserDetailsAddress,
  getUserRepositoriesAddress,
} = require("./githubAddress");

githubRoutes.get(getAllUsersAddress, async (req, res) => {
  try {
    const result = await gitHubRepository.getUsers(req.query);
    res.json({
      result,
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
});
githubRoutes.get(getUserDetailsAddress, async (req, res) => {
  try {
    const result = await gitHubRepository.getUserDetails(req.params);
    res.json({
      result,
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
});
githubRoutes.get(getUserRepositoriesAddress, async (req, res) => {
  try {
    const result = await gitHubRepository.getUserRepository(req.params);
    res.json({
      result,
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
});
module.exports = githubRoutes;
