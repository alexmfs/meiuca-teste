import React from 'react';

import './index.scss';


export const Button = (props) => {

    const { label, type, onClick, url} = props

    return (
        <a className={`btn ${type}`} onClick={onClick} href={url}>
            {label}
        </a>
    )
}
