import React, {useEffect, useState} from 'react';
import {ShapeResult} from "../../components/ShapeResult/ShapeResult";
import {determineGameOutcome} from "../../utils/helpers/game.helper";
import {gameStates, outcomeMessages} from "../../utils/constants/game.constants";
import {GameResult} from "../../components/GameResult/GameResult";
import {GameResultMobile} from "../../components/GameResult/GameResultMobile";
import useMediaQuery from "../../hooks/useMediaQuery";

// TODO: Reconsider different mobile design, maybe make it responsive instead

export const Step2 = ({userShape, playAgain, opponentShape, incrementUserScore, incrementOpponentScore}) => {
    const [gameOutcome, setGameOutcome] = useState('');
    const isDesktop = useMediaQuery('(min-width: 960px)');

    useEffect(() => {
        if (!opponentShape) return;
        const outcome = determineGameOutcome(userShape, opponentShape);
        setTimeout(() => {
            setGameOutcome(outcome)
            switch (outcome) {
                case gameStates.isUserWinner:
                    incrementUserScore()
                    break;
                case gameStates.isUserLoser:
                    incrementOpponentScore();
            }
        }, 1000)
    }, [opponentShape])

    return (
        <>
            {isDesktop
                ? <GameResult userShape={userShape} opponentShape={opponentShape} playAgain={playAgain}
                              gameOutcome={gameOutcome}/>
                : <GameResultMobile userShape={userShape} opponentShape={opponentShape} playAgain={playAgain}
                              gameOutcome={gameOutcome}/>}
        </>
    );
};
