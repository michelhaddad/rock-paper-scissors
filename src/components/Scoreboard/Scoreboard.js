import React from 'react';
import logo from "../../assets/images/logo.svg";

export const Scoreboard = () => {
    return (
        <div className="flex justify-center py-8 px-8">
            <div
                className="border-header-outline border-4 rounded-3xl py-4 px-6 flex justify-between space-x-8 md:min-w-[700px]">
                <img src={logo} alt="app logo" className="object-contain"/>
                <div className="bg-white rounded-lg px-14 py-3 text-center">
                    <p className="text-score-text tracking-widest">SCORE</p>
                    <p className="font-bold text-7xl text-dark-text">12</p>
                </div>
            </div>
        </div>
    );
};