import React, {useState} from 'react';
import {RulesModal} from "./RulesModal";
import RulesModalMobile from "./RulesModalMobile";


export const Rules = () => {
    const [isRulesShowing, setIsRulesShowing] = useState(false);
    const toggleShowing = () => {
        setIsRulesShowing(!isRulesShowing)
    }
    const hideRules = () => {
        setIsRulesShowing(false);
    }
    return (<div>
        <p onClick={toggleShowing} className="tracking-widest text-white float-right border-2 border-white rounded-lg py-1.5 px-9
            fixed right-8 bottom-8 hover:bg-white hover:text-main-blue hover:font-bold transition-colors">
            RULES
        </p>
        {isRulesShowing && <RulesModal hideRules={hideRules}/>}
        {isRulesShowing && <RulesModalMobile hideRules={hideRules}/>}
    </div>);
};