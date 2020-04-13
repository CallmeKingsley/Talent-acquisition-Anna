const express = require('express')
const router = express.Router()

const user = require('./user')
const todo = require('./Todo')
const applicant = require('./Applicant')

router.use('/users', user)
router.use('/todos', todo)
router.use('/applicants', applicant)

module.exports = router
