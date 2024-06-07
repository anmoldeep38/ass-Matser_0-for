const initialState = {
    player: { points: 5000 },
    dice: [0, 0],
    result: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PLAYER':
            return { ...state, player: action.player };
        case 'SET_DICE':
            return { ...state, dice: action.dice };
        case 'SET_RESULT':
            return { ...state, result: action.result };
        default:
            return state;
    }
};

export default rootReducer;
