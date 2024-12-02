import React from "react";
// import Head from "next/head";
// import PropTypes from "prop-types";
import { markup } from "./helper";

const Schema = ({ schema }) => {
  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(JSON.stringify(schema))}
        key="jsonld-course"
      />
    </React.Fragment>
  );
};

Schema.propTypes = {
  // schema: PropTypes.array.isRequired
};

export default Schema;
