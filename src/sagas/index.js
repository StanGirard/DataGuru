import {bitcoinsaga} from './bitcoinsaga';
import { todosaga } from './todosaga';
import {  all} from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    ...bitcoinsaga,
    ...todosaga
  ])
}