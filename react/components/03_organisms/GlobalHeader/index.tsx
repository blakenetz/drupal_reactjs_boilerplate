import './_style.scss';
import React from 'react';
// @ts-expect-error TS(6142): Module '../../01_atoms/MainMenu' was resolved to '... Remove this comment to see the full error message
import MainMenu from '../../01_atoms/MainMenu';

const GlobalHeader = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <header>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainMenu />
  </header>
);

export default GlobalHeader;
