//Me ayuda a sacar las propiedades de un objeto y convertirlo en variables
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err)
  return ('Unable to connect to MongoDb server');

  console.log('Connected to mongoDb');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c4f7725eae0b408ccbba6f5')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Error al buscar los datos');
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log("Todos");
  //   console.log('Todos Count '+ count);
  // },(err) => {
  //   console.log('Error al buscar los datos');
  // })
  db.collection('User').find({name:'Ana'}).count().then((count) => {
    console.log("Users");
    console.log('Users Count '+ count);
  },(err) => {
    console.log('Error al buscar los datos');
  })

  db.collection('User').find({name:'Ines'}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Error al buscar los datos');
  })




  db.close();


});
