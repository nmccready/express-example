import debug from 'debug-fabulous';

const pkg = require('./package.json');

export const rootDebug = debug.spawnable(pkg.name);
