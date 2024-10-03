import "./_style.scss";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("onRouteChangeStart", () => {
  NProgress.start();
});

Router.events.on("onRouteChangeComplete", () => {
  NProgress.done();
});

Router.events.on("onRouteChangeError", () => {
  NProgress.done();
});
