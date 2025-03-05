import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
  reglogotp:string
}

interface InitialStateType {
  authorizationModalVisiblty: ModalAuthorizationType;
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: {
    open: false,
    isLoading: false,
    reglogotp :"register"
  },
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisiblty(state, { payload }) {
      state.authorizationModalVisiblty = payload;
    },
    setRegLogOtp(state , {payload}){
      state.authorizationModalVisiblty.reglogotp = payload
    }
  },
});

export const { setAuthorizationModalVisiblty,setRegLogOtp } = modalSlice.actions;
export default modalSlice.reducer;
