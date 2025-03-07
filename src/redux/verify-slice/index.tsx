import { createSlice } from "@reduxjs/toolkit";

interface userBig{
    token:string
    user:User 
}

interface InitialStateType{
    isverify:boolean
    userData?:userBig | null
}

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    phonenumber: string;
    role: "user" | "admin"; // Agar faqat shu ikkita rol bo'lsa
  }


const initialState :InitialStateType ={
    isverify : localStorage.getItem("token") ? true :false,
    userData:null
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