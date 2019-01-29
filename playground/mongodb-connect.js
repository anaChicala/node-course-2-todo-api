const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err)
  return ('Unable to connect to MongoDb server');

  console.log('Connected to mongoDb');


  db.collection('Todos').insertOne({
    text: 'Cuidar a mi sobrina',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

  });

  // db.collection('User').insertOne({
  //     name: 'Ana',
  //     age: 23,
  //     location: 'Villa Allende'
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.close();


});
