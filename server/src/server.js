import 'babel-polyfill';
import {getModels} from './routes/models'
import express from 'express'
import winston from 'winston'
import expressWinston from 'express-winston'
const host = '0.0.0.0'
const port = '8080'

const app = express()

const logging = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({timestamp: true})
  ]
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      msg: "HTTP {{req.method}} {{req.url}}",
      colorize: true,
      timestamp: true
    })
  ]
}))

app.get('/models', getModels)

app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json:true,
        colorize: true,
        timestamp: true
      })
    ]
}))

app.listen(port, host)
logging.info('Listening on (' + host + ':'+ port + ')')
