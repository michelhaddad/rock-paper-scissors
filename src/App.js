import {Scoreboard} from "./components/Scoreboard";
import {Step1} from "./steps/Step1/Step1";
import {useEffect, useState} from "react";
import {Rules} from "./components/Rules/Rules";
import {Step2} from "./steps/Step2/Step2";

// TODO: Use scale to make ShapeChoice reusable

const App = () => {
    const [step, setStep] = useState(1)
    const [userShape, setUserShape] = useState('');
    const playAgain = () => {
        setUserShape('');
        setStep(1);
    }

    useEffect(() => {
        if (userShape === '') return
        setStep(step + 1)
    }, [userShape])
    return (
        <main>
            <div className="py-8 z-10">
                <Scoreboard/>
                {step === 1 && <Step1 setUserShape={setUserShape}/>}
                {step === 2 && <Step2 userShape={userShape} playAgain={playAgain}/>}
            </div>
            <Rules/>
        </main>
    )
}

export default App;
