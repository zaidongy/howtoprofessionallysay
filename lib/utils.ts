export const isBrowser = typeof window !== 'undefined';

export const noop = () => {};

export const isProduction = process.env.NODE_ENV === 'production';

export const FAV_KEY = 'htps:favorites';

export const capitalizeFirstLetter = (string: string) =>
  string[0].toLocaleUpperCase() + string.slice(1);
