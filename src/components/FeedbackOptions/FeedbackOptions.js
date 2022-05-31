import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(key =>
        (<button
          className={s.button}
          key={key}
          type="button"
          onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>))}
      </>
    );
  };
};