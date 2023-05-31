var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const key = process.env.MY_API_KEY
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/articles',(req , res )=>{
  fetch(`https://newsapi.org/v2/everything?sources=the-verge&apiKey=${key}`)
  .then ((res)=> res.json())
  .then ((data)=>{
    if (data.status === 'ok') {
    res.json({articles:data.articles});
    }
  })
});


//     if (data.articles === 'ok'){}
//   ))
// } )


module.exports = router

