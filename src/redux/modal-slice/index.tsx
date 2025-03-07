import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
  reglogotp:string
}

interface InitialStateType {
  authorizationModalVisiblty: ModalAuthorizationType;
  chiptamodal:boolean
  chiptaId:any
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: {
    open: false,
    isLoading: false,
    reglogotp :"register"
  },
  chiptamodal:false,
  chiptaId :null

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
    },
    setChiptaModal(state , {payload}){
      state.chiptamodal = payload.modal,
      state.chiptaId = payload.id
    }
  },
});

export const { setAuthorizationModalVisiblty,setRegLogOtp  , setChiptaModal} = modalSlice.actions;
export default modalSlice.reducer;
