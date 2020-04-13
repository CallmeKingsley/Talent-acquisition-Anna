const express = require('express')
const router = express.Router()
const application  = require('../controllers/').application

router.get('/applicant', application.getApplication)
router.post('/applicant', application.addApplicant)

module.exports = router