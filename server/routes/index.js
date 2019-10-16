var express = require('express')
var router = express.Router()

router.get('/health', (req, res) =>
    res.json({success: true})
)

module.exports = router