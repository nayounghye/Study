const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// 로그인 페이지(index.ejs) render
router.get('/', controller.main);
// app.get('/', 위 코드로 설정함.
//  function (req, res) {
//   res.render('index');
// });

// 회원가입 페이지(register.ejs) render
router.get('/register', controller.register);

// 회원 가입 -> user table에 insert를 실행시키는 api
// (회원가입 버튼을 눌렀을 때 보낼 api 필요)
router;

// 로그인 -> user table에서 회원 존재 여부를 판단하는 api (로그인 버튼을 눌렀을 때 보낼 api 필요)

// 회원정보 페이지 렌더

module.exports = router;
