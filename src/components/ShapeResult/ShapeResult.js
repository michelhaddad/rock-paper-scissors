import React from 'react';
import './ShapeResult.css'
import shapes from "../../utils/constants/shapes.constants";
import paperIcon from '../../assets/images/icon-paper.svg'
import scissorsIcon from '../../assets/images/icon-scissors.svg'
import rockIcon from '../../assets/images/icon-rock.svg'

const shapeAttributes = {
    [shapes.paper]: {
        src: paperIcon,
        shapeClass: 'result-button-blue'
    },
    [shapes.rock]: {
        src: rockIcon,
        shapeClass: 'result-button-red'
    },
    [shapes.scissors]: {
        src: scissorsIcon,
        shapeClass: 'result-button-yellow'
    }
}

export const ShapeResult = ({shape, isWinner}) => {
    const {src, shapeClass} = shapeAttributes[shape]
    return (
        <div
            className={`result-button transition-transform transition-shadow duration-150 relative
            ${isWinner && 'result-button-winner'} ${shapeClass}`}>
            <div className="result-button-inner">
                <img src={src} className="object-contain w-24 h-24" alt="action sign"/>
            </div>
        </div>
    );
};