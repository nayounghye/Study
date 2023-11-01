// const mysql = require('mysql');
// const { register } = require('../controller/Cuser');

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'qwe123!@#',
//   database: 'sesac_test',
// });

// exports.getUsers = (cb) => {
//   conn.query(`SELECT * FROM user`, (err, rows) => {
//     // err(에러) 변수가 빈 값이 아니면, 에러가 발생했다는 것으로 if문으로 에러 처리를 해줘야 한다. 아래 코드 뜻은 에러 발생시 버리겠다.
//     if (err) {
//       throw err;
//     }
//     // throw를 만나면 함수가 여기서 종료된다. 그러므로 다음 함수를 입력해줘야 한다.
//     console.log('user', rows);
//     cb(rows);
//   });
// };

// exports.insertUsers = (data, cb) => {
//   const sql = `INSERT INTO user (userid, name, pw) values ('${data.userid}','${data.name}','${data.pw}')`;

//   conn.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log('user insert', result);
//     cb(result.insertId);
//   });
// };

// ------------------ 테이블의 구조를 정의한다. ------------------
// orm은 객체와 db와 table을 매핑하는 기술을 의미한다.
// sequelize를 이용해서 table의 구조를 정의할 필요가 있다.

function User(Sequelize, DataTypes) {
  return Sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      name: { allowNull: false, type: DataTypes.STRING(10) },
      pw: { allowNull: false, type: DataTypes.STRING(20) },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = User;
