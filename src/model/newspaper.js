import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const NewsPaperSchema = Schema({
  id: {
    type: Number,
    required: true
  },
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
    id: Number,
    name: String,
    joined_date: String
  },
  link: {
    type: String
  }
});
export default mongoose.model('NewsPaper', NewsPaperSchema);