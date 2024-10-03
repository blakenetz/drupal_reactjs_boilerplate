import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import HtmlHead from '../components/01_atoms/HtmlHead';
import configureStore from '../store/store';
import ErrorMessage from '../components/01_atoms/ErrorMessage';
import SiteLayout from '../components/04_templates/GlobalLayout';
import '../components/01_atoms/PageProgressBar'; // Beautiful page transition indicator.

class Application extends App {
  static async getInitialProps({
    Component,
    res,
    ctx,
  }: any) {
    const initialProps = {
      isServer: !!ctx.req,
    };

    // Call to getInitialProps() from the Page component.
    if (Component.getInitialProps) {
      const childInitialProps = await Component.getInitialProps({
        ...initialProps,
        ...ctx,
      });

      // In case of Server Side rendering we want the server to throw the
      // correct error code.
      // @ts-expect-error TS(2339): Property 'statusCode' does not exist on type '{ is... Remove this comment to see the full error message
      if (res && initialProps.statusCode) {
        // @ts-expect-error TS(2339): Property 'statusCode' does not exist on type '{ is... Remove this comment to see the full error message
        res.statusCode = initialProps.statusCode;
      }

      return {
        ...initialProps,
        ...childInitialProps,
      };
    }

    return initialProps;
  }

  render() {
    // @ts-expect-error TS(2339): Property 'store' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { Component, store, ...pageProps } = this.props;
    // @ts-expect-error TS(2339): Property 'statusCode' does not exist on type '{ pa... Remove this comment to see the full error message
    const statusCode = pageProps.statusCode || 200;
    return (
      // @ts-expect-error TS(2769): No overload matches this call.
      <Provider store={store}>
        <>
          <HtmlHead />
          <SiteLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            // @ts-expect-error TS(2559): Type '{ pageProps: any; router: Router; __N_SSG?: ... Remove this comment to see the full error message
            // @ts-expect-error TS(2559): Type '{ pageProps: any; router: Router; __N_SSG?: ... Remove this comment to see the full error message
            {statusCode === 200 && <Component {...pageProps} />}
            {statusCode !== 200 && <ErrorMessage statusCode={statusCode} />}
          </SiteLayout>
        </>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(Application));
