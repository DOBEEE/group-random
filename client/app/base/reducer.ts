import homeReducer from '../page/home/reducer';
import pageReducer from '../page/pageone/reducer';


function rootReducer(state:any = {}, action) {
  return {
    home: homeReducer(state.home, action),
    pageone: homeReducer(state.pageone, action)
  };
}

export default rootReducer;