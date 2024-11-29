const productModules = require.context("./products", true, /\.js$/);

export const products = productModules
  .keys()
  .map((key) => productModules(key).data);
