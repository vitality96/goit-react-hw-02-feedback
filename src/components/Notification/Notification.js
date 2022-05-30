import React from "react";
import PropTypes from 'prop-types';
import s from './Notifiction.module.css';


export default function Notification({ message }) {
    return (
        <h3 className={s.title}>{message}</h3>
    );
};


Notification.propTypes = {
    message: PropTypes.string.isRequired,
}