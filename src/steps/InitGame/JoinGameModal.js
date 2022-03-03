import React, {useState} from 'react';
import iconClose from "../../assets/images/icon-close.svg";

export const JoinGameModal = ({joinGame, toggleJoinMenu}) => {
    const [gameIdInputValue, setGameIdInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!gameIdInputValue) return;
        joinGame(gameIdInputValue)
    }

    const handleGameIdChange = (e) => {
        setGameIdInputValue(e.target.value)
    }

    return (
        <div
            className="z-20 left-0 top-0 fixed w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white pt-10 pb-6 px-8 rounded-xl text-main-blue tracking-widest text-3xl">
                <div className="flex items-center mt-12 flex-col">
                    <form onSubmit={handleSubmit}>
                        <div className="space-x-4 flex items-center">
                            <label htmlFor="game-id" className="flex-[4_0_0%]">Game ID:</label>
                            <input
                                className="flex-[8_0_0%] shadow appearance-none border border-main-blue rounded w-full
                                py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="game-id" type="text" value={gameIdInputValue} onChange={handleGameIdChange}/>
                        </div>
                        <div className="flex justify-center mt-10 text-center">
                            <button className="tracking-widest text-white bg-main-blue rounded-lg py-1.5 px-9
                        hover:scale-110 transition-transform">JOIN
                            </button>
                        </div>
                    </form>
                    <img onClick={toggleJoinMenu} src={iconClose} alt="close icon" className="mt-8 bg-opacity-0 bg-gray-200 p-4 rounded-full
                    hover:bg-opacity-100 transition-colors duration-150"/>
                </div>
            </div>
        </div>
    );
};