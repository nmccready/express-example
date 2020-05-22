import { rootDebug } from '../debug';

const debug = rootDebug.spawn('config:index');

export const getConfig = (nodeConfigDir) => {
  if (nodeConfigDir) process.env.NODE_CONFIG_DIR = nodeConfigDir;

  debug(() => `NODE_ENV: ${process.env.NODE_ENV || 'default (config)'}`);

  const configLib = require('config');

  const config = configLib.util.toObject(configLib);

  // d(() => ({ config }));
  return config;
};

const rootConfig = getConfig();

export default rootConfig.default;
