import React from "react";
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map((key) => (
    <button className="" key={key} type="button" onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};


FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};