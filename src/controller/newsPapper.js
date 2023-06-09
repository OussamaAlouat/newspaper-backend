import { v4 } from 'uuid';
import { publisherModel, newsPaperModel } from '../model/newspaper';

const notFoundMessageBody = {
  msg: 'Not found newspaper with provided id'
}

const getNewsPapers = (req, res) => {
  newsPaperModel.find().populate('publisher').then((response) => {
    res.status(200).json({data: response})
  })
};


const getNewspaperById = (req, res) => {
  const { id } = req.params;
  newsPaperModel.findById(id).populate('publisher').then(resp => {
    if(resp) {
      res.json(resp);
    } else {
      res.status(404).json(notFoundMessageBody);
    }
  }).catch((err) => {
    res.json(err);
  })
};

const saveNewsPaper = (body, res) => {
  const newsPaperNew = new newsPaperModel(body);
  newsPaperNew.save().then((data) => {
    const returnData = {
      data: data,
      message:'Document created correctly'
    };

    res.status(201).json(returnData)
  }).catch((err) => {
    console.log(err);
    res.json(err)
  })
};

const postNewsPaper = (req, res) => {
  const { title, image , abstract, creation_date, languages, publisher, link } = req.body;
  publisherModel.findOne({ name: publisher }).then(resp => {
    if(resp) {
      newsPaperModel.find({ title, creation_date, publisher: resp })
      .then((response) => {
        if (response.length > 0) {
          const errorMessage = 'This document already exists on database';
          res.status(409).json({message: errorMessage});
        } else {
          const body = {
            title, image,
            abstract,
            creation_date,
            languages,
            publisher: resp._id,
            link
          };
          saveNewsPaper(body, res)
        }
      })
    } else {
      const _id = v4();
      const newPubliser = new publisherModel({
        _id,
        name: publisher,
        joined_date: new Date().toString()
      });

      newPubliser.save().then(data => {
        const body = {
          title,
          image,
          abstract,
          creation_date,
          languages,
          publisher: _id,
          link
        };
        saveNewsPaper(body, res);
      })
    }
  })
};

const deleteNewsPaper = (req, res ) => {
  const { id } = req.params;
  newsPaperModel.findByIdAndDelete(id).then((resp) => {
    if(resp !== null) {
      res.json(resp);
    } else {
      res.status(404).json(notFoundMessageBody);
    }
  }).catch(((err) =>{
    res.json(body);
  }))
};

const updateNewsPaper = (req, res) => {
  const { id } = req.params;
// `doc` is the document _before_ `update` was applied
  newsPaperModel.findByIdAndUpdate(id, req.body).then((resp) => {
    if (resp !== null) {
      res.json({
        msg: 'updated',
        old: resp
      });
    }  else {
      res.status(404).json(notFoundMessageBody)
    }
    }).catch((err) => {
      console.log(err);
      res.json(err)
    })
  };


  const getNewsPaperByTitle= (req, res) => {
    const { title } = req.query;
    // Used regex to make that request, to find all newspapers that its title starts with the provided data 
    // without case sensitive
    newsPaperModel.find({ 'title': { $regex: title, '$options' : 'i' } }).populate('publisher').then((data) => {
      if(data && data.length) {
        res.json(data);
      } else {
        res.status(404).json(notFoundMessageBody);
      }
    }).catch((err) => {
      res.json(err);
    })
  };

export {
  getNewsPapers,
  postNewsPaper,
  deleteNewsPaper,
  updateNewsPaper,
  getNewspaperById,
  getNewsPaperByTitle
};
