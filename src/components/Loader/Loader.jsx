import React from 'react';
import './Loader.css'

export const Loader = ({color}) => {
    color = color ?? 'white';
    return (
        <div className="lds-ellipsis">
            <div style={{backgroundColor: color}}/>
            <div style={{backgroundColor: color}}/>
            <div style={{backgroundColor: color}}/>
            <div style={{backgroundColor: color}}/>
        </div>
    );
};