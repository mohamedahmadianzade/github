const supertest = require("supertest");
const app = require("../index");
const expect = require("chai").expect;
const {
  getAllUsersAddress,
  getUserDetailsAddress,
  getUserRepositoriesAddress,
} = require("../httpHandler/githubAddress");

describe("Test github user services", () => {
  const request = supertest(app);
  describe("Github users", () => {
    it("list all users", async () => {
      const response = await request.get(getAllUsersAddress);
      expect(response.status).to.equal(200);
      expect(response.body.result.hasOwnProperty("links"), true);
    });
    it("get user details : username=mohamedahmadianzade", async () => {
      const response = await request.get(
        getUserDetailsAddress.replace(":username", "mohamedahmadianzade")
      );
      expect(response.status).to.equal(200);
      expect(response.body.result.id).to.equal(42762811);
    });
    it("get user respositories username:mohamedahmadianzade", async () => {
      const response = await request.get(
        getUserRepositoriesAddress.replace(":username", "mohamedahmadianzade")
      );
      expect(response.status).to.equal(200);
      expect(response.body.result[0].private).to.equal(false);
    });
  });
});
