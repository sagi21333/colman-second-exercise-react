var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://mongo:secret@localhost:27017/";


const findItems = async () => {
    const client = await MongoClient.connect(connectionString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('');

    console.log(db.group_by.find())

    // close connection
    client.close();
};

findItems()