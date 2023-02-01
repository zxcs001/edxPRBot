// Checks API example
// See: https://developer.github.com/v3/checks/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.on(["check_suite.requested", "check_run.rerequested"], check);

  async function check(context) {
    app.log.info(context);

    const { data } = await context.octokit.rest.pulls.get({
      owner: "octokit",
      repo: "rest.js",
      pull_number: 1278,
      mediaType: {
        format: "diff",
      },
    });
    app.log.info(data);
  }

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
