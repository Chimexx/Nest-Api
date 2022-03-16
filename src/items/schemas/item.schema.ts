import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  qty: Number,
});
