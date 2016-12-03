var pg = require('pg');

var config = {
  user: 'postgres',
  password: 'khoapham',
  database: 'USER',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillies: 30000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb){
  pool.connect(function(err, client, done){
    if(err){
      console.log('LOI KET NOI ' + err);
    }else{
      client.query(sql, cb);
    }
  });
}

//SELECT * FROM "User" WHERE username = 'xyz' AND password = 'abc'

pool.on('error', function(err, client){
  console.log('LOI:: ' + err);
});

function getAllNote(cb){
  queryDB(`SELECT * FROM "Notes"`, function(err, result){
    cb(result.rows);
  });
}

function deleteNote(id, cb){
  queryDB(`DELETE FROM "Notes" WHERE id = ${id}`, (err, result) =>{
    cb(result.rowCount);
  });
}

function updateNote(id, value, cb){
  queryDB(`UPDATE "Notes" SET note='${value}' WHERE id=${id}`, (err, result) => {
    cb(result.rowCount);
  });
}

function insertNote(value, cb){
  queryDB(`INSERT INTO "Notes"(note) VALUES ('${value}')`, (err, result) => {
    cb(result.rowCount);
  });
}

module.exports = {getAllNote, deleteNote, updateNote, insertNote};
console.log(module.exports);
// updateNote(4, "Hello", function(count){
//   if(count > 0){
//     console.log('Thanh cong');
//   }else{
//     console.log('That bai');
//   }
// });
