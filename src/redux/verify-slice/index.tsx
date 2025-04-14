import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types";

interface userBig{
    token:string
    user:User 
}

interface InitialStateType{
    isverify:boolean
    userData?:userBig | null
}



const initialState :InitialStateType ={
    isverify : localStorage.getItem("token") ? true :false,
    userData:null
}

const verifySlice = createSlice({
    name:"verify",
    initialState,
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