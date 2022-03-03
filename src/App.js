import {Scoreboard} from "./components/Scoreboard";
import {Step1} from "./steps/Step1/Step1";
import {useEffect, useState} from "react";
import {Rules} from "./components/Rules/Rules";
import {Step2} from "./steps/Step2/Step2";
import {InitGame} from "./steps/InitGame";
import socket from "./socket/socket";
import {wait} from "./utils/helpers/promise.helpers";

// TODO: Use scale to make ShapeChoice reusable

const App = () => {
    const [step, setStep] = useState(0)
    const [userShape, setUserShape] = useState('');
    const [gameId, setGameId] = useState('')
    const [opponentShape, setOpponentShape] = useState('');
    const [opponentId, setOpponentId] = useState('')

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
        setOpponentId(opponentId)
        setStep(1)
    }

    const pickShape = (shape) => {
        socket.emit('game:inform-shape', {to: opponentId, shape})
        setUserShape(shape)
        setStep(2)
    }

    const playAgain = () => {
        setUserShape('');
        setOpponentShape('')
        setStep(1);
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
    }, [])

    return (
        <main>
            <div className="py-8 px-4 z-10">
                {step === 0 &&
                    <InitGame startGame={startGame} createGame={createGame} joinGame={joinGame} gameId={gameId}/>}
                {step > 0 && <Scoreboard/>}
                {step === 1 && <Step1 pickShape={pickShape}/>}
                {step === 2 && <Step2 opponentShape={opponentShape} userShape={userShape} playAgain={playAgain}/>}
            </div>
            <Rules/>
        </main>
    )
}

export default App;
