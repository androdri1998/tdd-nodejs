const routes  = require('express').Router();
const SessionsController = require('./app/controllers/SessionsController');
const authMiddleware = require('./app/middlewares/auth');

routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);
routes.get('/dashboard', async (req, res) => {
  return res.status(200).send();
});

module.exports = routes;