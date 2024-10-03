import React from 'react';
// @ts-expect-error TS(2306): File '/Users/blakenetzeband/workspace/drupal_react... Remove this comment to see the full error message
import { Link } from '../../../routes';

const MainMenu = () => (
  <Link to="/">
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a className="nav-link">Home</a>
  </Link>
);

export default MainMenu;
