const initialState = {
  isPlaying: false,
  loops: [],
  mixes: []
}

export function loopReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: action.isPlaying }
    case 'SET_LOOPS':
      return { ...state, loops: action.items }
    case 'UPDATE_LOOP':
      return {
        ...state,
        loops: state.loops.map(loop =>
          loop._id === action.loop._id ? action.loop : loop
        )
      }
    case 'SET_MIXES':
      return { ...state, mixes: action.items }
    case 'SET_MIX':
      return { ...state, loops: action.mix.loops }
    case 'ADD_MIX':
      return { ...state, mixes: [...state.mixes, action.mix] }
    case 'REMOVE_MIX':
      return { ...state, mixes: state.mixes.filter(mix => mix._id !== action.mixId) }
    default:
      return state
  }
}
