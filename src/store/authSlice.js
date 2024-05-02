import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null,
    sessionId:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userId;
            state.sessionId = action.payload.sessionId;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.sessionId = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;