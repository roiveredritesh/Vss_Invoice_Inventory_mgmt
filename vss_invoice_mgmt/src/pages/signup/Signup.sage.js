import { put, takeLatest } from "redux-saga/effects";

import { postRequest } from "../../services/http.services";
import { PostSignupDetails } from "../../services/Api.url";
import {
  submitSignupDetails,
  submitSignupDetailsSuccess,
  submitSignupDetailsFailed,
} from "../signup/Signup.slice";

function* PostSignupDetailsAction(action) {
  try {
    const response = yield postRequest(PostSignupDetails, action.payload);
    console.log({ response });
    if (!response) {
      yield put(
        submitSignupDetailsFailed({ err: "Unable to post signup details" })
      );
      return;
    }

    yield put(submitSignupDetailsSuccess({ results: response }));
  } catch (e) {
    console.log("Error: ", e);
    yield put(
      submitSignupDetailsFailed({ err: "Unable to post signup details" })
    );
  }
}

function* watchsubmitSignupDetails() {
  yield takeLatest(submitSignupDetails, PostSignupDetailsAction);
}

export default watchsubmitSignupDetails;
