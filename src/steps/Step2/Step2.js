import React, {useEffect, useState} from 'react';
import shapes from "../../utils/constants/shapes.constants";
import {ShapeResult} from "../../components/ShapeResult/ShapeResult";
import {wait} from "../../utils/helpers/promise.helpers";
import {randomChoice} from "../../utils/helpers/array.helper";
import {determineGameOutcome} from "../../utils/helpers/game.helper";
import {gameStates} from "../../utils/constants/game.constants";

export const Step2 = ({userShape, playAgain}) => {
    const [botShape, setBotShape] = useState('');
    const [gameOutcome, setGameOutcome] = useState(0);
    const getResultText = () => {
        switch (gameOutcome) {
            case gameStates.isUserWinner:
                return 'YOU WIN';
            case gameStates.isUserLoser:
                return 'YOU LOSE';
            case gameStates.isDraw:
                return 'DRAW';
        }
    }

    useEffect(() => {
        const pickRandomShape = async () => {
            await wait(1000);
            const botShape = randomChoice([shapes.paper, shapes.rock, shapes.scissors]);
            const outcome = determineGameOutcome(userShape, botShape);
            setGameOutcome(outcome)
            setBotShape(botShape)
        }

        pickRandomShape().catch(console.error)
    }, [])

    return (
        <div className="h-[28rem] mt-16 flex justify-center space-x-28">
            <div className="space-y-12">
                <p className="text-white text-xl tracking-widest text-center">YOU PICKED</p>
                <div className="flex justify-center">
                    <ShapeResult shape={userShape} isWinner={botShape && gameOutcome === gameStates.isUserWinner}/>
                </div>
            </div>
            {
                botShape
                && <div className="flex justify-center">
                    <div className="space-y-6 mt-24">
                        <p className="text-white text-center text-5xl font-bold">{getResultText()}</p>
                        <p className="text-center text-sm tracking-widest text-dark-text rounded-lg py-2 px-10 bg-white
                     transition-transform hover:scale-[1.15]" onClick={playAgain}>
                            PLAY AGAIN
                        </p>
                    </div>
                </div>

            }
            <div className="space-y-12">
                <p className="text-white text-xl tracking-widest text-center">THE HOUSE PICKED</p>
                {
                    botShape
                        ? <div className="flex justify-center">
                            <ShapeResult shape={botShape} isWinner={botShape && gameOutcome === gameStates.isUserLoser}/>
                        </div>
                        : <div className="w-48 h-48 bg-black bg-opacity-20 !mt-20 rounded-full"/>
                }
            </div>
        </div>
    );
};
