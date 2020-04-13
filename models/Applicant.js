const mongoose = require('mongoose')

const ApplicantSchema = mongoose.Schema({
  FirstName: String,
  MiddlenName: String,
  LastName: String,
  Email: String,
  PhoneNumber: String,
  State: String,
  PreferedJob: String,
  Resume: String,
  DateCreated: String,
  Avaliablity: String
})

module.exports = mongoose.model('ApplicantSchema', ApplicantSchema)
