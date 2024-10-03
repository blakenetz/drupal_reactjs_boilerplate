import './_style.scss';
import NProgress from 'nprogress';
import Router from 'next/router';

// @ts-expect-error TS(2339): Property 'onRouteChangeStart' does not exist on ty... Remove this comment to see the full error message
Router.onRouteChangeStart = () => {
  NProgress.start();
};

// @ts-expect-error TS(2339): Property 'onRouteChangeComplete' does not exist on... Remove this comment to see the full error message
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

// @ts-expect-error TS(2339): Property 'onRouteChangeError' does not exist on ty... Remove this comment to see the full error message
Router.onRouteChangeError = () => {
  NProgress.done();
};
