// To help typescript find the type

import { mainTokens } from './main/index';
import { rinkebyTokens } from './rinkeby/index';

export const tokens = {
  rinkeby: rinkebyTokens,
  main: mainTokens,
};
