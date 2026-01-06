import React from 'react';
import './ShapeChoice.css'
import shapes from "../../utils/constants/shapes.constants";
import paperIcon from '../../assets/images/icon-paper.svg'
import scissorsIcon from '../../assets/images/icon-scissors.svg'
import rockIcon from '../../assets/images/icon-rock.svg'

const shapeAttributes = {
    [shapes.paper]: {
        src: paperIcon,
        extraClass: 'action-button-blue'
    },
    [shapes.rock]: {
        src: rockIcon,
        extraClass: 'action-button-red'
    },
    [shapes.scissors]: {
        src: scissorsIcon,
        extraClass: 'action-button-yellow'
    }
}

export const ShapeChoice = ({shape, onClick}) => {
    const {src, extraClass} = shapeAttributes[shape]
    return (
        <div onClick={onClick}
             className={`action-button hover:scale-105 transition-transform transition-shadow duration-150 ${extraClass}`}>
            <div className="action-button-inner">
                <img src={src} className="object-contain" alt="action sign"/>
            </div>
        </div>
    );
};