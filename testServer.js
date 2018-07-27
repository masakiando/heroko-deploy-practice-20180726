var express =  require('express');
var colors =  require('colors');
var Test =  require('./testModel');
var queries = require('./queries');
let router = express.Router();

console.log('starting testServer...'.white);

// router.get('/', (req, res, next) => {
//   res.send('/api/test Hello World!');
// });

//
// *** GET all shows *** //
router.get('/', function(req, res, next) {
  queries.getAll()
  .then(function(members) {
    res.status(200).json(members);
  });
});


router.post('/', (req, res) => {
  // User.insert(req.body, 'id');
  console.log(req.body);
  res.send("req OK");
});

module.exports = router
