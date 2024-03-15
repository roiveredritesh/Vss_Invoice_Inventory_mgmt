import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    rootreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
