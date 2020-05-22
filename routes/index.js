import { loadAll } from '../modules.js';
import { rootDebug } from '../debug.js';

const debug = rootDebug.spawn('routes');

export default (app) => {
  loadAll([import('./hi'), import('./foods')], { app, debug });
};
