import {Scoreboard} from "./components/Scoreboard";
import {ActionButton} from "./components/ActionButton";
import shapes from "./utils/constants/shapes.constants"

const App = () => {
    return (
        <main>
            <div className="bg-gradient-radial from-main-bg-from to-main-bg-to w-screen h-screen">
                <Scoreboard/>
                <div>
                    <div className="flex justify-evenly">
                        <ActionButton shape={shapes.paper} />
                        <ActionButton shape={shapes.scissors} />
                    </div>
                    <div className="flex justify-center">
                        <ActionButton shape={shapes.rock}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;
