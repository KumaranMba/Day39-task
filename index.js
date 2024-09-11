

const config = require('./utils/config');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

logger.info('Connecting to',config.MongoDB_URI);

mongoose.connect(config.MongoDB_URI)
  .then(()=>{
    logger.info('Connected to MongoDB...');
  })
  .catch((err)=>{
    logger.error('Error connecting to MongoDB:',err);
  })