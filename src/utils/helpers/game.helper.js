import shapes from "../constants/shapes.constants";
import {gameStates} from "../constants/game.constants";

export const determineGameOutcome = (userShape, opponentShape) => {
    if (userShape === opponentShape) return gameStates.isDraw;
    if (userShape === shapes.scissors && opponentShape === shapes.paper) return gameStates.isUserWinner;
    if (userShape === shapes.paper && opponentShape === shapes.rock) return gameStates.isUserWinner;
    if (userShape === shapes.rock && opponentShape === shapes.scissors) return gameStates.isUserWinner;
    return gameStates.isUserLoser;
}