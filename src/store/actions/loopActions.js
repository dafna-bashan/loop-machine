import { loopService } from '../../services/loopService'

export function togglePlay(isPlaying) {
  return dispatch => {
    dispatch({ type: 'TOGGLE_PLAY', isPlaying })
  }
}

export function loadItems(key) {
  return async dispatch => {
    try {
      const items = await loopService.query(key)
      if(key === 'loops'){
        dispatch({ type: 'SET_LOOPS', items })
      } else {
        dispatch({ type: 'SET_MIXES', items })
      }
    } catch (err) {
      console.log('loopActions: err in loadItems', err)
    }
  }
}


export function updateLoop(loop) {
  return async (dispatch) => {
    try {
      const updatedloop = await loopService.update(loop);
      dispatch({ type: 'UPDATE_LOOP', loop: updatedloop });
    } catch (err) {
      console.log('loopActions: err in updateLoop', err);
    }
  };
}

export function loadMix(mixId) {
  return async (dispatch) => {
      try {
          const mix = await loopService.getById(mixId);
          dispatch({ type: 'SET_MIX', mix });
          return mix;
      } catch (err) {
          console.log('loopActions: err in loadMix', err);
      }
  };
}

export function addMix(mix) {
  return async dispatch => {
    try {
      const addedMix = await loopService.add(mix)
      dispatch({ type: 'ADD_MIX', mix:  addedMix})
    } catch (err) {
      console.log('loopActions: err in addMix', err)
    }
  }
}

export function removeMix(mixId) {
  return async dispatch => {
    try {
      await loopService.remove(mixId)
      dispatch({ type: 'REMOVE_MIX', mixId })
    } catch (err) {
      console.log('itemActions: err in removeMix', err)
    }
  }
}

