import newsPaper from '../model/newspaper';


const getNewsPappers = (req, res) => {
  newsPaper.find()
    .then((response) => {
      console.log(response, newsPaper.db)
      res.status(200).json({data: response})
    })
};

export {
  getNewsPappers,
}