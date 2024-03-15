import { all, fork } from "redux-saga/effects";
import watchsubmitSignupDetails from "../pages/signup/Signup.sage";

export default function* rootSaga() {
  yield all([fork(watchsubmitSignupDetails)]);
}
