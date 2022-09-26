const express = require('express')
const app = express()
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');


// Database
// nodeadmin
// #atlanta143


app.get('/', function(req, res) {


    const uri = "mongodb+srv://admin:admin@cluster0.wmwu3t0.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(async(err) => {
        const collection = client.db("sample_weatherdata").collection("data");
        await collection.findOne({}).then(item => {
                res.send(item);
            })
            // .then((err, data) => {
            //     console.log(err, data);
            // });
            // perform actions on the collection object
        client.close();
    });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})