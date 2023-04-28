import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const NewsPaperSchema =  new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  abstract: {
    type: String,
    required: true
  },
  creation_date: {
    type: String,
    required: true
  },
  languages: {
    type: [],
    required: true
  },
  publisher: {
    type: Schema.Types.String,
    ref: 'publisher',
    required: true,
  },
  link: {
    type: String
  }
});


const publisherSchema = new Schema({
  _id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  joined_date: { type: Schema.Types.String, required: true },
});

const publisherModel = mongoose.model('publisher', publisherSchema);
const newsPaperModel = mongoose.model('NewsPaper', NewsPaperSchema);

export {
  publisherModel,
  newsPaperModel
}