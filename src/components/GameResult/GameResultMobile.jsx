import React from 'react';
import {ShapeResult} from "../ShapeResult/ShapeResult";
import {gameStates, outcomeMessages} from "../../utils/constants/game.constants";

export const GameResultMobile = ({userShape, opponentShape, gameOutcome, playAgain}) => {
    return (
        <div>
            <div className="h-[20rem] mt-16 w-full grid grid-cols-2 place-items-center">
                <div className="w-full">
                    <p className="text-white text-lg md:text-xl tracking-widest text-center">YOU PICKED</p>
                </div>
                <div className="w-full">
                    <p className="text-white text-lg md:text-xl tracking-widest text-center">THE OPPONENT PICKED</p>
                </div>
                <div className="flex justify-center scale-[0.6] w-fit">
                    <ShapeResult shape={userShape}
                                 isWinner={opponentShape && gameOutcome === gameStates.isUserWinner}/>
                </div>
                {
                    opponentShape && gameOutcome
                        ? <div className="flex justify-center scale-[0.6] w-fit">
                            <ShapeResult shape={opponentShape}
                                         isWinner={opponentShape && gameOutcome === gameStates.isUserLoser}/>
                        </div>
                        : <div className="flex justify-center scale-[0.6] w-fit">
                            <div className="w-48 h-48 bg-black bg-opacity-20 rounded-full"/>
                        </div>
                }
            </div>
            {
                opponentShape && gameOutcome
                && <div className="flex justify-center mt-4">
                    <div className="space-y-6">
                        <p className="text-white text-center text-5xl font-bold">{outcomeMessages[gameOutcome]}</p>
                        <p className="text-center text-sm tracking-widest text-dark-text rounded-lg py-2 px-10 bg-white
                     transition-transform hover:scale-[1.15]" onClick={playAgain}>
                            PLAY AGAIN
                        </p>
                    </div>
                </div>

            }
        </div>
    );
};