import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
  },
});

module.exports = mongoose.models.Books || mongoose.model("Books", BookSchema);
