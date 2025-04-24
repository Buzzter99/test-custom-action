const core = require("@actions/core");
const github = require("@actions/github");
async function run() {
  try {
    const name = core.getInput("name");
    const repo = github.context.repo;
    console.log(`Hello, ${name}!`);
    console.log(`Context is: ${repo.owner}/${repo.repo}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
