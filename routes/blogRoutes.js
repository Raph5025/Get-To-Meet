const express = require('express');
//const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('menu/menu', {title: "Menu"});
});
router.get(('/menu/settings'), (req, res) => {
    res.render('menu/settings', {title: 'Settings'});
});

module.exports = router;