import { combineReducers } from 'redux';
import introDone from './introDone';
import chatMessages from './chatMessages';

const rootReducer = combineReducers({
  introDone,
  chatMessages,
});

export default rootReducer;
