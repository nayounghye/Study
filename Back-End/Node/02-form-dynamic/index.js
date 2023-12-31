const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// req.body를 해석하기 위한 코드
// extended : true -> qs 모듈(외부 모듈)을 사용한다. / extended : false -> 내장 모듈인 queryString을 사용한다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/ajax/get', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax/post', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get('/axios/get', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios/post', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
