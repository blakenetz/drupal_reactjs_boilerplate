import nextRoutes, { LinkProps } from "next-routes";
import React, { PropsWithChildren } from "react";

// @see https://github.com/fridays/next-routes
// Additional dynamic routes.
const routes = new nextRoutes();
// Single recipe path pattern.
// .add('_recipe', '/recipes/:recipe');

export const Link = routes.Link as React.FC<PropsWithChildren<LinkProps>>;
export default routes;
