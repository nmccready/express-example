// import express from 'express';
import express from 'express';
import routes from './routes';
import config from './config';

const { server } = config;

// const app = express();
const app = express();

routes(app);

// eslint-disable-next-line no-console
app.listen(server.port, () => console.log(`Example app listening on port ${server.port}!`));
