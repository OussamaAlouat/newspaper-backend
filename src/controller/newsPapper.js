import NewsPaper from '../model/newspaper';


const getNewsPapers = (req, res) => {
  NewsPaper.find()
    .then((response) => {
      res.status(200).json({data: response})
    })
};

const postNewsPaper = (req, res) => {
  const { title, image , abstract, creation_date, languages, publisher, link } = req.body;

  //If there are one document with the same title, creation_date and publisher
  //we will not put in our database.
  NewsPaper.find({ title, creation_date, publisher })
    .then((response) => {
      if (response.length > 0) {
        const errorMessage = 'This document already exists on database';
        res.status(409).json({message: errorMessage});
      } else {
        const newsPaperNew = new NewsPaper({
          title,
          image,
          abstract,
          creation_date,
          languages,
          publisher,
          link
        });
        

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
      }
    })
};

const deleteNewsPaper = (req, res ) => {
  const { id } = req.body;
  NewsPaper.findByIdAndDelete(id).then((resp) => {
    if(resp !== null) {
      res.json(resp);
    } else {
      res.status(404).json({ msg: 'Not found' });
    }
  }).catch(((err) =>{
    res.json(body);
  }))
};

export {
  getNewsPapers,
  postNewsPaper,
  deleteNewsPaper
}