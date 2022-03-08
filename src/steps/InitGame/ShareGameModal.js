import React from 'react';
import iconClose from "../../assets/images/icon-close.svg";
import {Loader} from "../../components/Loader/Loader";

const ShareGameModal = ({setIsCreating, gameId}) => {
    const haltCreation = () => {
        setIsCreating(false)
    }

    return (
        <div
            className="z-20 left-0 top-0 fixed w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white pt-10 pb-6 px-8 rounded-xl text-main-blue tracking-widest text-2xl md:text-3xl">
                <p className="text-center">The Game's ID is</p>
                <p className="text-center mt-4"><span className="text-white bg-dark-text p-2 rounded-lg px-3 mx-3">{gameId}</span></p>
                <div className="flex items-center mt-12 flex-col">
                    <Loader color="hsl(229, 25%, 31%)"/>
                    <p className="text-xl">Waiting For Friend To Join</p>
                    <img onClick={haltCreation} src={iconClose} alt="close icon" className="mt-12 bg-opacity-0 bg-gray-200 p-4 rounded-full
                    hover:bg-opacity-100 transition-colors duration-150"/>
                </div>
            </div>
        </div>
    );
};

export default ShareGameModal;