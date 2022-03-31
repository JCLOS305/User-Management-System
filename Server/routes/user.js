const express = require('express');
const router = express.Router();

// Routing

router.get('',(req,res) => {
    res.render('home');
});

module.exports = router;