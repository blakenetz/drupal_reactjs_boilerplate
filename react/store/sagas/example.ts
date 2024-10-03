import { all, select, takeEvery } from 'redux-saga/effects';

/**
 * React on example action being triggered.
 */
function* exampleSaga() {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const counter = yield select((reduxStore) => reduxStore.example.count);
  // eslint-disable-next-line no-console
  yield console.log(`Saga triggered. New counter is ${counter}`);
}

/**
 * Main entry point for all example sagas.
 */
export default function* exampleSagas() {
  yield all([
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    yield takeEvery('EXAMPLE_ACTION', exampleSaga),
  ]);
}
