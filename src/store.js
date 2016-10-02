import {
  combineReducers,
  applyMiddleware,
  createStore as reduxCreateStore,
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const rootReducer = () => combineReducers({
  isIntroDone: require('./intro/reducer').default,
  messages: require('./chat/reducer').default,
});

export function createStore(initialState) {
  const store = reduxCreateStore(
    rootReducer(),
    initialState,
    applyMiddleware(thunk, logger)
  );

  // TODO
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('.', () => {
  //     const nextReducer = rootReducer();
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
