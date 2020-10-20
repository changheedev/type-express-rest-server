import * as express from 'express';
import * as logger from 'morgan';

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
