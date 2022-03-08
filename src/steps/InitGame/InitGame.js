import React, { useState} from 'react';
import logo from '../../assets/images/logo.svg'
import ShareGameModal from "./ShareGameModal";
import {JoinGameModal} from "./JoinGameModal";

// TODO extract button classes in a utility tailwind class

export const InitGame = ({startGameAgainstPc, gameId, joinGame, createGame}) => {
    const [isCreating, setIsCreating] = useState(false)
    const [isJoinMenuShowing, setIsJoinMenuShowing] = useState(false)

    const create = () => {
        createGame()
        setIsCreating(true)
    }

    const toggleJoinMenu = () => {
        setIsJoinMenuShowing(!isJoinMenuShowing);
    }

    return (
        <>
            <div className="flex justify-center">
                <img src={logo} alt="logo" className="object-contain h-40"/>
            </div>
            <div className="flex justify-center items-center flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-40 mt-20 lg:mt-40">
                <button onClick={create} className="min-w-[14rem] tracking-widest text-white border-2 border-white rounded-lg py-1.5 px-9
            hover:bg-white hover:text-main-blue hover:font-bold transition-colors">
                    CREATE GAME
                </button>
                <button onClick={toggleJoinMenu} className="min-w-[14rem] tracking-widest text-white border-2 border-white rounded-lg py-1.5 px-9
            hover:bg-white hover:text-main-blue hover:font-bold transition-colors">
                    JOIN GAME
                </button>
                <button onClick={startGameAgainstPc} className="min-w-[14rem] tracking-widest text-white border-2 border-white rounded-lg py-1.5 px-9
            hover:bg-white hover:text-main-blue hover:font-bold transition-colors">
                    PLAY AGAINST PC
                </button>
            </div>
            {isCreating && <ShareGameModal setIsCreating={setIsCreating} gameId={gameId}/>}
            {isJoinMenuShowing && <JoinGameModal joinGame={joinGame} toggleJoinMenu={toggleJoinMenu}/>}
        </>
    );
};