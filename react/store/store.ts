// Default redux createStore function.
import { createStore, applyMiddleware } from 'redux';

// Debug.
import { composeWithDevTools } from 'redux-devtools-extension';

// Sagas!
import createSagaMiddleware from 'redux-saga';

// Import all our custom sagas.
import sagas from './sagas';

// Import all our custom reducers.
import reducers from './reducers';

// Create a saga middleware.
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState: any) {
  // Build store.
  // TODO: Disable dev tools on production.
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  // @ts-expect-error TS(2339): Property 'runSagaTask' does not exist on type 'Sto... Remove this comment to see the full error message
  store.runSagaTask = () => {
    // @ts-expect-error TS(2339): Property 'sagaTask' does not exist on type 'Store<... Remove this comment to see the full error message
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  // @ts-expect-error TS(2339): Property 'runSagaTask' does not exist on type 'Sto... Remove this comment to see the full error message
  store.runSagaTask();
  return store;
}

export default configureStore;
