import Actions from './'
import Dispatcher from '../stores/appDispatcher'

const Dispatches = {
  boot: (payload) => {
    Dispatcher.dispatch({
      type: Actions.BOOT,
      payload
    })
  },
  gote: (payload) => {
    Dispatcher.dispatch({
      type: Actions.LOAD_GOTE,
      payload
    })
  }
}


export default Dispatches
