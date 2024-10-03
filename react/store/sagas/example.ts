import { all, select, takeEvery } from "redux-saga/effects";

/**
 * React on example action being triggered.
 */
function* exampleSaga() {
  //@ts-ignore
  const counter = yield select((reduxStore) => reduxStore.example.count);

  yield console.log(`Saga triggered. New counter is ${counter}`);
}

/**
 * Main entry point for all example sagas.
 */
export default function* exampleSagas() {
  //@ts-ignore
  yield all([yield takeEvery("EXAMPLE_ACTION", exampleSaga)]);
}
