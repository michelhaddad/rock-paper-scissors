import React, {useEffect, useState} from 'react';
import {ShapeResult} from "../../components/ShapeResult/ShapeResult";
import {determineGameOutcome} from "../../utils/helpers/game.helper";
import {gameStates} from "../../utils/constants/game.constants";

const outcomeMessages = {
    [gameStates.isUserWinner]: 'YOU WIN',
    [gameStates.isUserLoser]: 'YOU LOSE',
    [gameStates.isDraw]: 'DRAW',
}

export const Step2 = ({userShape, playAgain, opponentShape}) => {
    const [gameOutcome, setGameOutcome] = useState('');

    useEffect(() => {
        if (!opponentShape) return;
        const outcome = determineGameOutcome(userShape, opponentShape);
        setTimeout(() => setGameOutcome(outcome), 1000)
    }, [opponentShape])

    return (
        <div className="h-[28rem] mt-16 flex justify-center space-x-28">
            <div className="space-y-12">
                <p className="text-white text-xl tracking-widest text-center">YOU PICKED</p>
                <div className="flex justify-center">
                    <ShapeResult shape={userShape} isWinner={opponentShape && gameOutcome === gameStates.isUserWinner}/>
                </div>
            </div>
            {
                opponentShape && gameOutcome
                && <div className="flex justify-center">
                    <div className="space-y-6 mt-24">
                        <p className="text-white text-center text-5xl font-bold">{outcomeMessages[gameOutcome]}</p>
                        <p className="text-center text-sm tracking-widest text-dark-text rounded-lg py-2 px-10 bg-white
                     transition-transform hover:scale-[1.15]" onClick={playAgain}>
                            PLAY AGAIN
                        </p>
                    </div>
                </div>

            }
            <div className="space-y-12">
                <p className="text-white text-xl tracking-widest text-center">THE OPPONENT PICKED</p>
                {
                    opponentShape && gameOutcome
                        ? <div className="flex justify-center">
                            <ShapeResult shape={opponentShape}
                                         isWinner={opponentShape && gameOutcome === gameStates.isUserLoser}/>
                        </div>
                        : <div className="flex justify-center !mt-20">
                            <div className="w-48 h-48 bg-black bg-opacity-20 rounded-full"/>
                        </div>
                }
            </div>
        </div>
    );
};
