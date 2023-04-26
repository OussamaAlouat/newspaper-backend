import { Router } from 'express';
import { index } from '../controller'
import { getNewsPapers, postNewsPaper } from '../controller/newsPapper';

export default () => {
  const routes = Router();
  routes.get('/',
    (req, res) => index(req, res)
  );

  routes.get('/newspaper', (req, res) => getNewsPapers(req, res))
  routes.post('/newspaper', (req, res) => postNewsPaper(req, res))

  return routes;
}