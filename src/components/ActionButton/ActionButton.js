import React from 'react';
import './ActionButton.css'
import shapes from "../../utils/constants/shapes.constants";
import paperSign from '../../assets/images/icon-paper.svg'
import scissorsSign from '../../assets/images/icon-scissors.svg'
import rockSign from '../../assets/images/icon-rock.svg'

const shapeAttributes = {
    [shapes.paper]: {
        src: paperSign,
        extraClass: 'action-button-blue'
    },
    [shapes.rock]: {
        src: rockSign,
        extraClass: 'action-button-red'
    },
    [shapes.scissors]: {
        src: scissorsSign,
        extraClass: 'action-button-yellow'
    }
}

export const ActionButton = ({shape}) => {
    const {src, extraClass} = shapeAttributes[shape]
    return (
        <div className={`action-button ${extraClass}`}>
            <div className="action-button-inner">
                <img src={src} className="object-contain" alt="paper sign"/>
            </div>
        </div>
    );
};