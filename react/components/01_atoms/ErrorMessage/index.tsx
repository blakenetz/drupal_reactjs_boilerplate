import "./_style.scss";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "../../../routes";

const ErrorMessage = ({ statusCode }: any) => (
  <div className="error-message">
    {statusCode} error. <br />
    <Link route="/">
      <a>To the Homepage</a>
    </Link>
  </div>
);

ErrorMessage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default ErrorMessage;
