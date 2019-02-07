import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Details = ({ description }) => (
  <React.Fragment>
    <h2>Details</h2>
    {ReactHtmlParser(description)}
  </React.Fragment>
);

Details.propTypes = {
  description: PropTypes.string.isRequired
};

export default Details;
