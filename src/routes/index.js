import { Router } from 'express';
import { index } from '../controller'
import { getNewsPapers, postNewsPaper } from '../controller/newsPapper';

import { check } from "express-validator";
import { postCheckValidation } from "../middleware/validation";

export default () => {
  const routes = Router();
  routes.get('/',
    (req, res) => index(req, res)
  );

  routes.get('/newspaper', (req, res) => getNewsPapers(req, res))
  routes.post('/newspaper',     [
    check('title').isLength({min: 4}),
    check('abstract').isLength({min: 2}),
    check('creation_date').exists(),
    check('publisher').exists()
  ],
  (req, res, next) => postCheckValidation(req, res, next),
  (req, res) => postNewsPaper(req, res))

  return routes;
}