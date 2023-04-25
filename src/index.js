import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import configuration from './config';

const app = express();

//CONFIG ---------------
const config = configuration(app);
app.use(bodyParser());

app.use(cors())

app.listen(process.env.PORT || config.port, () => {
    const listeningPort = process.env.PORT || config.port;
    console.log('Server listening on port ' + listeningPort);
});

export {app}