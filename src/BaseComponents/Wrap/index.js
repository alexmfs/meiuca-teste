import React from 'react';

import './index.scss';

export const Wrap = (props) => {

    const { children, className} = props

    return (
        <div className= {`wrap ${className}`}>
            {children}
        </div>
    )
}
