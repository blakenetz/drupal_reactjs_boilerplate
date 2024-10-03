// Default redux createStore function.
import { createStore, applyMiddleware } from "redux";

// Debug.
import { composeWithDevTools } from "redux-devtools-extension";

// Sagas!
import createSagaMiddleware from "redux-saga";

// Import all our custom sagas.
import sagas from "./sagas";

// Import all our custom reducers.
import reducers from "./reducers";

type Ext = { runSagaTask?: VoidFunction };

// Create a saga middleware.
const sagaMiddleware = createSagaMiddleware<Ext>();

function configureStore(initialState: any) {
  // Build store.
  // TODO: Disable dev tools on production.
  const store = createStore<any, any, Ext, any>(
    reducers,
    initialState,
    // @ts-ignore
    composeWithDevTools<Ext, {}>(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
