import {ReduceStore}   from 'flux/utils'
import qs              from 'qs'
import moment          from 'moment'

import Dispatcher      from './appDispatcher'
import Actions         from '../actions'
import defaultConfig   from '../modules/config'

const defaultState = () => {
  return { }
}

class AppStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return defaultState()
  }

  reduce(state, action) {
    switch (action.type) {
      case Actions.BOOT:
        return Object.assign({}, defaultState(), action.payload)
      case Actions.LOAD_GOTE:
        return Object.assign({}, defaultState(), action.payload)
      default:
        return state
    }
  }
}

export default new AppStore()
