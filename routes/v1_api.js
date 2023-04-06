const express = require('express');
const { getCommitters, getAllCommits } = require('../commit/commit_service');
const CONFIG = require('../config/config');
const router = express.Router();

router.get('/gets/:start/:end', async (req, res) => {
  let logs = await getAllCommits(req.params.start, req.params.end);
  return res.send(logs);
});

router.get('/get/:date', async (req, res) => {
  let committers = await getCommitters(req.params.date);
  return res.send(committers['listWithGithub']);
});

router.get('/users', async (req, res) => {
  return res.send({ committers: CONFIG.member_list });
});

router.get('/username', async (req, res) => {
  return res.send({ committers: CONFIG.member_list_github });
});

router.get('/test', async (req, res) => {
  res.statusCode = 200; //send the appropriate status code
  return res.json({
    status: 'success',
    message: 'Test Message',
    data: { code: res.statusCode },
  });
});

module.exports = router;
