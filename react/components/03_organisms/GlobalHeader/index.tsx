import './_style.scss';
import React from 'react';
import MainMenu from '../../01_atoms/MainMenu';

const GlobalHeader = () => (
  <header>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainMenu />
  </header>
);

export default GlobalHeader;
