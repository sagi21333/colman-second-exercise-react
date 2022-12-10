var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://mongo:secret@localhost:27017/";

const products = [
    {
      title: 'milk', 
      price: '10', 
      imageUrl: '/images/milk.jpeg'
    },
    {
      title: 'pasta',
      price: '5',
      imageUrl: '/images/pasta.jpeg'
    },
    {
      title: 'Banana',
      price: '9',
      imageUrl: '/images/pasta.jpeg'
    },
    {
      title: 'Avokado',
      price: '7',
      imageUrl: '/images/pasta.jpeg'
    }
];

const findItems = async () => {
    const client = await MongoClient.connect(connectionString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('');
    
    for (var i = 0; i < products.length; i++) {
      await db.collection('products').insertOne(products[i]);
    }

    // close connection
    client.close();
};

findItems()