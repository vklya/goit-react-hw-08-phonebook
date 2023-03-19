import { createSlice } from "@reduxjs/toolkit";

import { fetchLogin, fetchCurrent, fetchLogout, fetchSignup } from "./operations";

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
}

const handleFulfilled = (state, { payload }) => {
    const { token, user } = payload;
    state.isLoading = false;
    state.user = user;
    state.token = token;
    state.isLogin = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            //signUp
            .addCase(fetchSignup.pending, handlePending)
            .addCase(fetchSignup.fulfilled, handleFulfilled)
            .addCase(fetchSignup.rejected, handleRejected)
            //logIn
            .addCase(fetchLogin.pending, handlePending)
            .addCase(fetchLogin.fulfilled, handleFulfilled)
            .addCase(fetchLogin.rejected, handleRejected)
            //refresh
            .addCase(fetchCurrent.pending, handlePending)
            .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
                const { token, data } = payload;
                state.isLoading = false;
                state.user = data;
                state.token = token;
                state.isLogin = true;
            })
            .addCase(fetchCurrent.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.token = "";
                state.error = payload;
            })
            //logOut
            .addCase(fetchLogout.pending, handlePending)
            .addCase(fetchLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = {};
                state.token = "";
                state.isLogin = false;
            })
            .addCase(fetchLogout.rejected, handleRejected)
    }
});

export const authReducer = authSlice.reducer;
