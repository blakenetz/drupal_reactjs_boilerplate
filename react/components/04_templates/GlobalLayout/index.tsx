import "./_style.scss";
import React from "react";
import PropTypes from "prop-types";
// @ts-expect-error TS(6142): Module '../../03_organisms/GlobalHeader' was resol... Remove this comment to see the full error message
import GlobalHeader from "../../03_organisms/GlobalHeader";
// @ts-expect-error TS(6142): Module '../../03_organisms/GlobalFooter' was resol... Remove this comment to see the full error message
import GlobalFooter from "../../03_organisms/GlobalFooter";

const GlobalLayout = ({ children }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <GlobalHeader />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <div className="content">{children}</div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <GlobalFooter />
  </>
);

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalLayout;
