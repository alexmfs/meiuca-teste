import React from 'react';

import './index.scss';

export const Shape = (props) => {

    const { children, classContext} = props

    return (
        <div className= {`shape ${classContext}`}>
            {children}
        </div>
    )
}
