import NewsPaper from '../model/newspaper';


const getNewsPapers = (req, res) => {
  NewsPaper.find()
    .then((response) => {
      res.status(200).json({data: response})
    })
};

const postNewsPaper = (req, res) => {
  const {title, image , abstract, creation_date, languages, publisher, link } = req.body;
  console.log(req.body)
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



export {
  getNewsPapers,
  postNewsPaper
}