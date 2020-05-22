import dbConfig from '../database';

const { dev } = dbConfig;

const config = {
  server: { port: 3001 },
  db: {
    connection: {
      ...dev,
      port: +dev.port,
    },
    client: dev.driver,
  },
};

export default config;
