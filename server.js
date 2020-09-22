const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const app = express();

// Connect Data Base 
connectDB();
// Initializing Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init Middleware
app.use(express.json({ extended: false }));
// CORS Policy Allowing from Anywhere '*' Switch to domain name
// Allowing All Methods
// Requesting Content-Type
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => res.send({ msg: "Avtostart Dordoi API Documentation" }));

const PORT = process.env.PORT || 5000;

// Routes
const accumulatorsRoute = require('./routes/Accumulators');
const accessoriesRoute = require('./routes/Accessories');
const tiresRoute = require('./routes/Tires');

// Define Routes
app.use('/api-v1/accumulators', accumulatorsRoute);
app.use('/api-v1/tires', tiresRoute);
app.use('/api-v1/accessories', accessoriesRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));