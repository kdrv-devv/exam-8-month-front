import { createSlice } from "@reduxjs/toolkit";



interface InitialStateType{
    isverify:boolean
    userData:object[]
}


const initialState :InitialStateType ={
    isverify :false,
    userData:[]
}



const verifySlice = createSlice({
    initialState,
    name:"verify",
    reducers:{
        setIsverify(state , {payload}){
            state.isverify = payload
        },
        setUserData(state , {payload}){
            state.userData = payload
        }
    }
})



export const {setIsverify ,setUserData} = verifySlice.actions
export default verifySlice.reducer