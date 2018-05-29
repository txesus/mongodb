const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// Connection URL

// AQUI VA TU NOMBRE y TU PASS DE LA BBDD de MLAb
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

  // collection.find({done: true}).toArray(function(err, docs) {
  //     if(err){
  //       console.log("Error finding in Mongo", err)
  //     }

  //     console.log("Found the following records");
  //     console.log(docs)
  // });


  // collection.updateOne({ done : true }, 
  //   { $set: { done : false } }, 
  //   function(err, result) {
  //     if (err){
  //         console.log("Error", err);
  //     }
  //     console.log("Update the following records");
  //     console.log(result);
  // }); 


  collection.deleteOne({
    '_id': new mongodb.ObjectId('5b0c2efdfb6fc0292d6fe0aa')
    }, function(err, result) {
      if (err){
          console.log("Error", err);
      }
      console.log("Update the following records");
      console.log(result);

  });  



  // Cerramos la conexión
  client.close();
});