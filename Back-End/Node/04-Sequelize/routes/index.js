const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// 나의 삽질 ----------------------------------------------------------------
// // 로그인 페이지(index.ejs) render
// router.get('/', controller.main);
// // app.get('/', 위 코드로 설정함.
// //  function (req, res) {
// //   res.render('index');
// // });

// // 회원가입 페이지(register.ejs) render
// router.get('/register', controller.register);

// // 회원 가입 -> user table에 insert를 실행시키는 api
// // (회원가입 버튼을 눌렀을 때 보낼 api 필요)
// router;

// // 로그인 -> user table에서 회원 존재 여부를 판단하는 api (로그인 버튼을 눌렀을 때 보낼 api 필요)

// // 회원정보 페이지 렌더

// // ---------------------------------------------------------------------------------

router.get('/', controller.main); // index 를 렌더

router.get('/signup', controller.signup); // 회원가입 페이지를 렌더
router.post('/signup', controller.post_signup); // 회원가입 버튼 클릭 시 post 요청을 이용해 ()안에 있는 api를 가져옴,

router.get('/signin', controller.signin); // 로그인 페이지를 렌더
router.post('/signin', controller.post_signin); // 로그인 버튼 클릭 시 post 전송

router.post('/profile', controller.profile); // 프로필 페이지를 렌더 (임시로 일반 post 폼 전송을 사용, 아직 우리는 로그인을 유지시키는 기술을 안배움.)
router.patch('/profile/edit/:id', controller.profile_edit); // 회원정보 수정 버튼 클릭 시 patch요청을 이용해 ()안에 있는 api 가져옴.
router.delete('/profile/delete/:id', controller.profile_delete); // 회원 탈퇴 버튼 클릭 시

module.exports = router;
