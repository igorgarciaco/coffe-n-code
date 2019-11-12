const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://dev:devteste@omnistack-shard-00-00-q1c6m.mongodb.net:27017,omnistack-shard-00-01-q1c6m.mongodb.net:27017,omnistack-shard-00-02-q1c6m.mongodb.net:27017/test?ssl=true&replicaSet=Omnistack-shard-0&authSource=admin&retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
})

// app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(routes);

app.listen(3333);