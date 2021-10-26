import React from 'react';

import './index.scss';

export const DataList = (props) => {

    const { children, className} = props

    return (
        <div className= {`data-list ${className}`}>
            {children}
        </div>
    )
}
