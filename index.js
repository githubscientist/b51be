// import mongoose
const mongoose = require('mongoose');

// import logger, config from utils
const logger = require('./utils/logger');
const config = require('./utils/config');

// import the app
const app = require('./app');

// set the strictQuery option to false to allow for querying by id
mongoose.set('strictQuery', false);

logger.info('Connecting to MongoDB...', config.MONGODB_URI);

// connect to MongoDB
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to MongoDB...');
        
        // start the server
        app.listen(config.PORT, () => {
            logger.info(`Server running on port ${config.PORT}...`);
        });
    })
    .catch((error) => {
        logger.error('Error connecting to MongoDB:', error.message);
    });