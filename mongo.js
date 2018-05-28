const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://user:pass@ds137600.mlab.com:37600/master-test'

// Database Name
const dbName = 'master-test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  
  if(err){
    console.log("Err!", err);
    return false;
  }
  console.log("Connected successfully to server");
  
  // Preparamos la base de datos
  const db = client.db(dbName);
  
  //Work!! 

  // Preparamos la colección
  const collection = db.collection('todo');


  // Hacemos el insert
  // collection.insert({
  //   text: "Insertar en Mongo",
  //   done: true
  // }, function(err, result){
  //     if(err){
  //       console.log("Error inserting in Mongo", err)
  //     }
  //     console.log(result)
  // });
  //Hacemos búsqueda

  collection.find({done: false}).toArray(function(err, docs) {
      if(err){
        console.log("Error finding in Mongo", err)
      }

      console.log("Found the following records");
      console.log(docs)
  });
  

  // Cerramos la conexión
  client.close();
});