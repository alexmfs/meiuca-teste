import React from 'react';

import './index.scss';

export const Typography = (props) => {

    const { type, label, size} = props

    switch (type) {
        case 'heading':
            return <h1 className={`heading ${size || "small"}`}>{label}</h1>
        
        case 'subtitle':
            return <h2 className={`subtitle ${size || "small"}`}>{label}</h2>

        default:
            return <p className={`paragraph ${size || "small"}`}>{label}</p>
    }
}