const mongoose = require('mongoose');


const mongoURL = 'mongodb://localhost:27017/form collection';
mongoose.connect(mongoURL, {useNewUrlParser: true})

const db = mongoose.connection;
db.on('connected',()=>{
  console.log("Connected to MongoDB");
})
db.on('error', (err) => { console.log(err); })

module.exports = db;