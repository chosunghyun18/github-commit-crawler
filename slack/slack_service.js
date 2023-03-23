const { WebClient } = require('@slack/web-api');
const CONFIG = require('../config/config');

const web = new WebClient(CONFIG.slack_api_token);

const readCommitHistory = async () => {
  const res = await web.conversations.history({
    channel: CONFIG.slack_channel_id,
  });
  const history = res.messages
    .filter((e) => e.attachments !== undefined)
    .map((e) => {
      const attachment = e.attachments[0];
      if (
        attachment.title === undefined ||
        attachment.title_link === undefined
      ) {
        return null;
      }
      const commitLink = attachment.title_link;
      const ts = new Date(Number(e.ts) * 1000);
      const fallbackName = attachment.fallback;
      const nameInFallback = fallbackName.substring(
        fallbackName.indexOf('[') + 1,
        fallbackName.indexOf('/')
      );
      return {
        author_name: nameInFallback,
        commit_link: commitLink,
        timestamp: ts,
      };
    })
    .filter((e) => e !== null);
  return history;
};

const getUnsavedCommit = async (lastSavedCommitTime) => {
  const history = await readCommitHistory();
  return history.filter(
    (e) => new Date(e.timestamp) > new Date(lastSavedCommitTime)
  );
};

module.exports = {
  readCommitHistory,
  getUnsavedCommit,
};
