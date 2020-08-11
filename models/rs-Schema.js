const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  // 資料結構待處理
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
