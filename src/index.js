import express from 'express';
import bodyParser from 'body-parser';
import configuration from './config';
import routes from './routes';
import cors from 'cors'

const app = express();

//CONFIG ---------------
const config = configuration(app);
app.use(bodyParser());

app.use(cors())

//ROUTES----------------
app.use('/', routes());


app.listen(process.env.PORT || config.port, () => {
    const listeningPort = process.env.PORT || config.port;
    console.log('Server listening on port ' + listeningPort);
});

export {app}