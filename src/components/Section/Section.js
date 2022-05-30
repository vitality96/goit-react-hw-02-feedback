import React from "react";
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
    return (
        <>
            <h2 className={s.section}>{title}</h2>
            {children}
        </>
    )
};


Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};