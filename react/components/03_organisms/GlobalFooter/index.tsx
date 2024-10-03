import './_style.scss';
import React from 'react';

const GlobalFooter = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <footer>
    Some example footer content.
  </footer>
);

export default GlobalFooter;
