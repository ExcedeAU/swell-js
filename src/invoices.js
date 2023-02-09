import { defaultMethods } from './utils';
import cache from './cache';

function methods(request) {
  const { get, list } = defaultMethods(request, '/invoices', ['list', 'get']);
  return {
    get: (id, ...args) => {
      return cache.getFetch('invoices', id, () => get(id, ...args));
    },

    list,
  };
}

export default methods;
