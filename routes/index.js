var express = require('express');
var router = express.Router();

/* GET home page. */
//index.js를 보여주겠다, 템플릿에서 사용할 변수설정(title변수를 설정)
router.get('/', function(req, res) {
    res.render('index', { title: 'Node~~~!!!'});
});


router.get('/chat', function(req, res) {
    res.render('chat', {io_url : req.protocol+"://"+req.get('host')});
});

module.exports = router;
