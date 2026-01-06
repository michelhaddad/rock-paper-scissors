import {Scoreboard} from "./components/Scoreboard";
import {Step1} from "./steps/Step1/Step1";
import {useEffect, useState} from "react";
import {Rules} from "./components/Rules/Rules";
import {Step2} from "./steps/Step2/Step2";
import {InitGame} from "./steps/InitGame";
import socket from "./socket/socket";
import {randomChoice} from "./utils/helpers/array.helper";
import shapes from "./utils/constants/shapes.constants";
import {WaitForOpponent} from "./components/WaitForOpponent/WaitForOpponent";

// TODO: Use scale to make ShapeChoice reusable

const App = () => {
    const [step, setStep] = useState(0)
    const [userShape, setUserShape] = useState('');
    const [isAgainstPc, setIsAgainstPc] = useState(false);
    const [gameId, setGameId] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0)
    const [opponentShape, setOpponentShape] = useState('');
    const [opponentId, setOpponentId] = useState('');
    const [isWaitingToPlayAgain, setIsWaitingToPlayAgain] = useState(false);
    const [isOpponentWaitingToPlayAgain, setisOpponentWaitingToPlayAgain] = useState(false);

    const createGame = () => {
        socket.connect()
        socket.emit("game:create")
    }

    const joinGame = (gameId) => {
        socket.connect()
        socket.emit("game:join", gameId)
        startGame(gameId)
    }

    const startGame = (opponentId) => {
        setOpponentId(opponentId);
        setStep(1)
    }

    const startGameAgainstPc = () => {
        setIsAgainstPc(true)
        setStep(1)
        const botShape = randomChoice([shapes.paper, shapes.rock, shapes.scissors]);
        setOpponentShape(botShape)
    }

    const pickShape = (shape) => {
        if (!isAgainstPc) socket.emit('game:inform-shape', {to: opponentId, shape})
        setUserShape(shape)
        setStep(2)
    }

    const playAgain = () => {
        setUserShape('');
        setOpponentShape('')
        setStep(1);
        if (isAgainstPc) {
            const botShape = randomChoice([shapes.paper, shapes.rock, shapes.scissors]);
            setOpponentShape(botShape);
            return;
        }
        socket.emit('game:play-again', {to: opponentId})
        setIsWaitingToPlayAgain(true)
    }

    const incrementUserScore = () => {
        setUserScore(userScore + 1)
    }
    const incrementOpponentScore = () => {
        setOpponentScore(opponentScore + 1)
    }

    useEffect(() => {
        socket.on("connect", () => {
            setGameId(socket.id)
        })
        socket.on("game:start", ({joiner}) => {
            startGame(joiner)
        });
        socket.on('game:opponent-shape', (shape) => {
            setOpponentShape(shape)
        })
        socket.on('game:opponent-play-again', () => {
            setisOpponentWaitingToPlayAgain(true)
        })
    }, [])

    useEffect(() => {
        if (isWaitingToPlayAgain && isOpponentWaitingToPlayAgain) {
            setIsWaitingToPlayAgain(false)
            setisOpponentWaitingToPlayAgain(false)
        }
    }, [isWaitingToPlayAgain, isOpponentWaitingToPlayAgain])

    return (
        <main>
            <div className="py-8 px-4 z-10">
                {step === 0 &&
                    <InitGame startGameAgainstPc={startGameAgainstPc} createGame={createGame} joinGame={joinGame}
                              gameId={gameId}/>}
                {step > 0 && <Scoreboard userScore={userScore} opponentScore={opponentScore}/>}
                {step === 1 && <Step1 pickShape={pickShape}/>}
                {step === 2 && <Step2 opponentShape={opponentShape} userShape={userShape} playAgain={playAgain}
                                      incrementOpponentScore={incrementOpponentScore} incrementUserScore={incrementUserScore}/>}
            </div>
            <Rules/>
            {isWaitingToPlayAgain && <WaitForOpponent/>}
        </main>
    )
}

export default App;
