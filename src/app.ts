import * as express from 'express';
import * as logger from 'morgan';
import { SnakeNamingStrategy } from './config/orm/snake-naming-strategy';
import { createConnection, getConnectionOptions } from 'typeorm';

const app: express.Application = express();

const connectDatabase = async () => {
    try {
        const connectionOptions = await getConnectionOptions();
        await createConnection(
            Object.assign(connectionOptions, {
                namingStrategy: new SnakeNamingStrategy(),
            }),
        );
        console.log('DB connection success');
    } catch (error) {
        console.error(error);
    }
};

const setMiddlewares = () => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
};

connectDatabase();
setMiddlewares();

export default app;
