import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BusinessName: "",
  BusinessContactNo: "",
  BusinessRegisteredAddress: "",
  BusinessState: 0,
  BusinessCity: 0,
  BusinessPincode: 0,
  BusinessContactPerson: "",
  BusinessGSTIN: "",
  BusinessGSTScheme: "",
  BusinessPassword: "",
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    submitSignupDetails: (state) => {
      state.isLoading = true;
    },
    submitSignupDetailsSuccess: (state, actions) => {
      state.isLoading = false;
      state.err = null;
      state.data = actions.payload.results;
    },
    submitSignupDetailsFailed: (state, actions) => {
      state.isLoading = false;
      state.err = actions.payload.err;
      state.data = {};
    },
  },
});

export const {
  submitSignupDetails,
  submitSignupDetailsSuccess,
  submitSignupDetailsFailed,
} = SignupSlice.actions;

export default SignupSlice.reducer;
