import dbFact from 'knex';
import rootConfig from '../config';

const { connection, client } = rootConfig.db;

export default (app) => {
  app.get('/foods', (req, resp) => {
    const db = dbFact({ client, connection });

    // db.raw('SELECT * from food').then(({ rows }) => resp.json(rows));
    db('food').then((f) => resp.json(f));
  });
};
