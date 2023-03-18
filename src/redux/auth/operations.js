import { createAsyncThunk } from "@reduxjs/toolkit";
import { signup, login, logout, refresh } from "services/auth-api";

export const fetchSignup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const res = await signup(data);
            return res;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await login(data);
            return res;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchLogout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const res = await logout();
            return res;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCurrent = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const res = await refresh(auth.token);
            return res;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        
        }
    }
)

