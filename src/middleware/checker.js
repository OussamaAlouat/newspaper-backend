export const isPresentAtleastOne = (array , res, req, next) => {
  let finded = false;
  array.forEach(element => {
    const elemToSeacrh = req.body[element];
    if(elemToSeacrh && elemToSeacrh !== null) {
      finded = true;
      return;
    }
  });

  if (finded) {
    next();
  } else {
    const jsonMessage = {
      msg: 'It is necessary to send at least one of the following properties',
      properties: [ ...array ]
    }
    res.status(422).json(jsonMessage)
  }
} 