// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'routes'.
const routes = require('next-routes');

// @see https://github.com/fridays/next-routes
// Additional dynamic routes.
module.exports = routes();
// Single recipe path pattern.
// .add('_recipe', '/recipes/:recipe');
