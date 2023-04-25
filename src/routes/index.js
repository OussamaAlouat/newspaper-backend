import { Router } from 'express';
import { index } from '../controller'
import { getNewsPappers } from '../controller/newsPapper';
import newspaper from '../model/newspaper';

export default () => {
  const routes = Router();
  routes.get('/',
    (req, res) => index(req, res)
  );

  routes.get('/newspaper', (req, res) => getNewsPappers(req, res))

  return routes;
}