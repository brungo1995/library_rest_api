// @ts-check
import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env';
import usersRoute from './app/routes/usersRoute';
import categoryRoutes from './app/routes/categoryRoutes';
import bookRoutes from './app/routes/bookRoutes';
import authorRoutes from './app/routes/authorRoutes';
import logsRoutes from './app/routes/logsRoute';
import dummyDataRoute from './app/routes/dummyDataRoute';
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/', usersRoute);
app.use('/', categoryRoutes);
app.use('/', authorRoutes);
app.use('/', bookRoutes);
app.use('/', logsRoutes);
app.use('/', dummyDataRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(env.port).on('listening', () => {
    console.log(`🚀 are live on ${env.port}`);
});


export default app;