import React from 'react';
import {Loader} from "../Loader/Loader";

export const WaitForOpponent = () => {
    return (
        <div
            className="z-20 left-0 top-0 fixed w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white pt-10 pb-6 px-8 rounded-xl text-main-blue tracking-widest text-xl flex flex-col items-center">
                <Loader color="hsl(229, 25%, 31%)"/>
                <p>WAITING FOR OPPONENT</p>
            </div>
        </div>
    );
};