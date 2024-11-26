const winston = require('winston');
const morgan = require('morgan');
const express = require('express');
const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),  // 输出到控制台
        new winston.transports.File({ filename: 'logs/app.log' })  // 输出到文件
    ]
});

// 配置 morgan 记录日志
app.use(morgan('combined'));  // 'combined' 是一种常用的日志格式

// // 在 routes/user.js 或其他文件中
// const logger = require('../config/logger');

// // 示例：记录信息和错误
// logger.info('This is an info log message.');
// logger.error('This is an error log message.');

// const express = require('express');
// const morgan = require('morgan');
// const logger = require('./config/logger');  // 引入 logger

// const app = express();

// // 使用 morgan 和自定义 logger 记录请求日志
// app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) }}));
