const ApplicantModel = require('../models/Applicant')
const { validationResult } = require('express-validator')

module.exports = {
  addApplicant: async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

      const application = new ApplicantModel({
        FirstName: req.body.FirstName,
        MiddlenName: req.body.MiddlenName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        State: req.body.State,
        PreferedJob: req.body.PreferedJob,
        Resume: req.body.Resume,
        DateCreated: Date(),
        Avaliablity: req.body.Avaliablity
      })

      const completedApplication = await application.save()
      if (completedApplication) {
        res.status(200).json({
          Application: completedApplication
        })
      }
    } catch (e) {
      res.status(500).json({
        user: e,
        message: 'could\'t add user'
      })
    }
  },
  getApplication: async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

      const Allapplicant = await ApplicantModel.find({})
      res.status(200).json({
        Applications: Allapplicant
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        user: e,
        message: 'could\'t get Applications'
      })
    }
  }
}
