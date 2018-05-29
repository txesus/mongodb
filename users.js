const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// Connection URL

// AQUI VA TU NOMBRE y TU PASS DE LA BBDD de MLAb
const url = 'mongodb://user:pass@ds137600.mlab.com:37600/master-test'

// Database Name
const dbName = 'master-test';


function connectionDB(callback){
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      
      if(err){
        console.log("Err!", err);
        return false;
      }
      console.log("Connected successfully to server");
      
      // Preparamos la base de datos
      const db = client.db(dbName);
      const collection = db.collection('users');
      
      callback(client, collection);
      
    });

}

// Añadir usuarios
function addUser(data, callback){
       connectionDB(function(client, collection){
           collection.insert({
             user: data.user,
             post_count: data.post_count,
             added_date: data.added_date
             }, function(err, result){
               if(err){
                 console.log("Error inserting in Mongo", err)
               }
               callback(data, result.ops[0]._id);
           });
    
          // Cerramos la conexión
          client.close();
           
       });

}


addUser({
         user: "Ana",
         post_count: 10,
         added_date: new Date()
        },
        function (data, id){
            console.log(data, id);
        }
);





// function listUser(){

// }