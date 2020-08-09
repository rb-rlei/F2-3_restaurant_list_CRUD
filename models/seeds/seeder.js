const mongoose = require('mongoose')
const Restaurant = require('../rs-Schema')
const rawData = require('../../raw_restaurant.json')

mongoose.connect('mongodb://localhost/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  //  用 for 迴圈遍歷資料
  console.log('seeds 資料的連線')
  for (let i = 0; i < rawData.results.length; i++) {
    Restaurant.create({
      name: rawData.results[i].name,
      image: rawData.results[i].image,
      category: rawData.results[i].category,
      phone: rawData.results[i].phone,
      location: rawData.results[i].location,
      description: rawData.results[i].description,
    })
  }
  console.log('seeds  for 迴圈結束')
})
