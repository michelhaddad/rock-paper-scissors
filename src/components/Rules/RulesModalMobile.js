import React from 'react';
import iconClose from "../../assets/images/icon-close.svg";
import rulesImg from "../../assets/images/image-rules.svg";

const RulesModalMobile = ({hideRules}) => {
    return (
        <div className="xs:hidden left-0 top-0 fixed w-screen h-screen bg-white p-6">
            <p className="font-bold text-dark-text text-4xl text-center mt-20">RULES</p>
            <div className="flex justify-center mt-28">
                <img src={rulesImg} className="object-contain" alt="rules image"/>
            </div>
            <div className="absolute left-0 w-full bottom-16">
                <img onClick={hideRules} className="object-contain m-auto w-10 h-10" src={iconClose} alt="close icon"/>
            </div>
        </div>
    );
};

export default RulesModalMobile;