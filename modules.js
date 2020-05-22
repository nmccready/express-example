import Bluebird from 'bluebird';

const { map } = Bluebird;
// import { Application } from 'express';
// import { DebuggerExt } from 'debug-fabulous';

// export interface Loader {
//   default: (app: any) => void;
// }

export const load = (app) => ({ default: lib }) => lib(app);

// export interface LoadAllProps {
//   app: Application;
//   debug: DebuggerExt;
// }

export const loadAll = (libs, { app, debug }) =>
  map(libs, load(app)).then(() => debug(() => 'done'));
