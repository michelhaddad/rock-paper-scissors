import React from 'react';
import logo from "../../assets/images/logo.svg";

export const Scoreboard = ({userScore, opponentScore}) => {
    return (
        <div className="flex justify-center px-4 sm:px-8">
            <div
                className="border-header-outline border-4 rounded-3xl py-4 px-6 flex justify-between
                space-x-8 w-full md:w-fit md:min-w-[700px]">
                <img src={logo} alt="app logo" className="w-28 sm:w-40 object-contain"/>
                <div className="bg-white rounded-lg px-6 sm:px-14 py-3 text-center">
                    <p className="text-score-text tracking-widest">SCORE</p>
                    <p className="font-bold text-5xl sm:text-7xl text-dark-text">{`${userScore} - ${opponentScore}`}</p>
                </div>
            </div>
        </div>
    );
};