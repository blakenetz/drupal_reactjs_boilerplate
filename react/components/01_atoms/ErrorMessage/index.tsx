import './_style.scss';
import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2306): File '/Users/blakenetzeband/workspace/drupal_react... Remove this comment to see the full error message
import { Link } from '../../../routes';

const ErrorMessage = ({
  statusCode,
}: any) => (
  <div className="error-message">
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    Oops, {statusCode} error. <br />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link to="/">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <a>To the Homepage</a>
    </Link>
  </div>
);

ErrorMessage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default ErrorMessage;
