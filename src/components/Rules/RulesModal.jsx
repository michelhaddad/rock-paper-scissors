import React from 'react';
import iconClose from "../../assets/images/icon-close.svg";
import rulesImg from "../../assets/images/image-rules.svg";

export const RulesModal = ({hideRules}) => {
    return (
        <div
            className="hidden xs:inline-flex z-20 left-0 top-0 fixed w-screen bg-black bg-opacity-60 h-screen flex justify-center items-center">
            <div className="w-[25rem] h-[25rem] bg-white p-6 rounded-xl">
                <div className="flex justify-between">
                    <p className="font-bold text-dark-text text-3xl">RULES</p>
                    <img onClick={hideRules} className="object-contain" src={iconClose} alt="close icon"/>
                </div>
                <div className="flex justify-center mt-8">
                    <img src={rulesImg} className="object-contain" alt="rules image"/>
                </div>
            </div>
        </div>
    );
};