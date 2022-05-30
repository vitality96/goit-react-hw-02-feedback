import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statictics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Total: {total}</li>
                <li className={s.item}>Positive Feedback: {positivePercentage}%</li>
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