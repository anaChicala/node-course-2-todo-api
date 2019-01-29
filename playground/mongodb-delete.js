const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err)
  return ('Unable to connect to MongoDb server');

  console.log('Connected to mongoDb');

  //delteMany
  // db.collection('Todos').deleteMany({text:'Cuidar a mi sobrina'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('User').deleteMany({name:'Ana'}).then((result) => {
  //   console.log(result);
  // });


  //DeleteOne
  // db.collection('Todos').deleteOne({text:'Cuidar a mi sobrina'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('User').deleteOne({name:'Carlos'}).then((result) => {
  //   console.log(result);
  // });

  //FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('User').findOneAndDelete({_id: ObjectID('5c5042b83619f6185e512c93')}).then((result) => {
    console.log(result);
  });




   db.close();


});
