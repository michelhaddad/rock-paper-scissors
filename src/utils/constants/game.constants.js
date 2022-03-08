export const gameStates = {
    isUserWinner: 'user-winnner',
    isUserLoser: 'user-loser',
    isDraw: 'user-draw',
}

export const outcomeMessages = {
    [gameStates.isUserWinner]: 'YOU WIN',
    [gameStates.isUserLoser]: 'YOU LOSE',
    [gameStates.isDraw]: 'DRAW',
}