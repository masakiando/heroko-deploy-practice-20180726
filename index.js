var express =  require('express');
var cors = require('cors');
import pgp from 'pg-promise';

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

const env = process.env.DATABASE_URL;
const db = pgp(env);
app.get('/sql', (req, res, next)=>{
  db.none('insert into test (name, text) values ($1, $2)', ['hello', 'word'])
})

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"},
    {"id": 4,"firstName":"Ando","lastName":"Masaki","email":"hello@hotmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
