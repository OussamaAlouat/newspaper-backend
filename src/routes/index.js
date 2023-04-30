import { check, param, query } from "express-validator";
import { Router } from 'express';
import { index } from '../controller'
import { deleteNewsPaper, getNewspaperById, getNewsPaperByTitle, getNewsPapers, postNewsPaper, updateNewsPaper } from '../controller/newsPapper';

import { postCheckValidation } from "../middleware/validation";
import { isPresentAtleastOne } from '../middleware/checker';

const variablesToCheck = ['title', 'image', 'abstract', 'languages', 'link', 'creation_date'];

export default () => {
  const routes = Router();
  routes.get('/',
    (req, res) => index(req, res)
  );

  routes.get('/newspaper/',
  [
    query('title').exists(),
    query('title').isString()
  ],
  (req, res, next) => postCheckValidation(req, res, next),
  (req, res) => getNewsPaperByTitle(req, res)
);

  routes.get('/newspaper/id/:id',
    [
      param('id').exists(),
      param('id').isMongoId(),
    ],
    (req, res, next) => postCheckValidation(req, res, next),
    (req, res) => getNewspaperById(req, res)
  );

  routes.get('/newspaper/all',
    (req, res) => getNewsPapers(req, res)
  );

  routes.post('/newspaper',
    [
      check('title').isLength({min: 4}),
      check('abstract').isLength({min: 2}),
      check('creation_date').exists(),
      check('publisher').exists()
    ],
    (req, res, next) => postCheckValidation(req, res, next),
    (req, res) => postNewsPaper(req, res)
  );

  routes.delete('/newspaper/:id',
    [
      param('id').exists(),
      param('id').isMongoId(),
    ],
    (req, res, next) => postCheckValidation(req, res, next),
    (req, res) => deleteNewsPaper(req, res)
  );

  routes.put('/newspaper/:id',
    [
    param('id').exists(),
    param('id').isMongoId(),
    check('publisher').not().exists(),
    ],
    (req, res, next) => isPresentAtleastOne(variablesToCheck, res, req, next),
    (req, res, next) => postCheckValidation(req, res, next),
    (req,res) => updateNewsPaper(req, res)
  );

  return routes;
}