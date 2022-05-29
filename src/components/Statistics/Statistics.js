import React from "react";
import PropTypes from 'prop-types';

export default function Statictics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <ul className="">
                <li className="">Good: {good}</li>
                <li className="">Neutral: {neutral}</li>
                <li className="">Bad: {bad}</li>
                <li className="">Total: {total}</li>
                <li className="">Positive Feedback: {positivePercentage}%</li>
            </ul>
        </div>
    );
};


Statictics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};