import React from 'react';
import Head from 'next/head';

const HtmlHead = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Head>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <title>SystemSeed&apos;s Decoupled boilerplate</title>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <meta charSet="utf-8" />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <link rel="shortcut icon" href="/static/favicon.ico" type="image/vnd.microsoft.icon" />
  </Head>
);

export default HtmlHead;
