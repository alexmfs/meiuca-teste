import React from 'react';
import { Shape } from '../../BaseComponents/Shape';
import { Typography } from '../../BaseComponents/Typography';
import { Button } from '../../BaseComponents/Button';


import './index.scss';

export const CardContent = (props) => {

    const { title, description, content, url} = props
    
    return (
        <Shape classContext="card-content">
            <Typography label={title} type="heading" size="large"/>
            <Typography label={description} type="subtitle" size="small"/>
            <Typography label={content} />
            <Button label="Ler mais" type="primary" url={url}/>
        </Shape>
    )
}
