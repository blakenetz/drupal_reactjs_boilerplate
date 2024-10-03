import compression from "compression";
import express from "express";
import basicAuth from "express-basic-auth";
import nextjs from "next";
import dotenv from "dotenv";
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'routes'.
import routes from "./routes";

// Import variables from local .env file if exists.
dotenv.config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = nextjs({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  // Initialize express.js server.
  const expressServer = express();

  // Make sure we enable http auth only on platform.sh dev branches.
  if (process.env.PLATFORM_BRANCH && process.env.PLATFORM_BRANCH !== "master") {
    // Make sure that we do have http user & password set in variables.
    if (process.env.HTTP_AUTH_USER && process.env.HTTP_AUTH_PASS) {
      expressServer.use(
        basicAuth({
          users: {
            [process.env.HTTP_AUTH_USER]: process.env.HTTP_AUTH_PASS,
          },
          challenge: true,
        })
      );
    }
  }

  // Serve gzipped content where possible.
  expressServer.use(compression());

  // Send robots.txt file from /static folder.
  const options = {
    root: `${__dirname}/static/`,
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  };
  expressServer.get("/robots.txt", (req: any, res: any) =>
    res.status(200).sendFile("robots.txt", options)
  );

  // Set browser caching for all static files.
  expressServer.use(
    "/static",
    express.static(`${__dirname}/static`, {
      maxAge: "7d",
    })
  );

  expressServer.get("*", (req: any, res: any) => handler(req, res));

  expressServer.listen(port, (err: any) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log("> Application is ready to serve!");
  });
});
