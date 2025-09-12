import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { stat } from "fs";
// import { build } from "vite";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};
// export const signupUser=createAsyncThunk("/auth/signup")
// async(formData)=>{
//   const response=await axios.post("http://localhost:3000/auth/signup",
//     formData,
//     {withCredentials:true}
//   )
//   return response.data;
// }
export const signupUser = createAsyncThunk(
  '/auth/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/signup',
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);
export const loginUser = createAsyncThunk(
  '/auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);
 

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers:(builder)=>{
    builder.addCase(signupUser.pending,(state)=>{
      state.isLoading=true

    }).addCase(signupUser.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.user=null
      state.isAuthenticated=false

    }).addCase(signupUser.rejected,(state,action)=>{
      state.isLoading=false;
      state.user=null
      state.isAuthenticated=false
    state.error = action.payload || action.error.message;
    })

    .addCase(loginUser.pending,(state)=>{
      state.isLoading=true

    }).addCase(loginUser.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.user=action.payload.success ?   action.payload.
      user:null;
      state.isAuthenticated=action.payload.success  
      // ? true: false 

    }).addCase(loginUser.rejected,(state,action)=>{
      state.isLoading=false;
      state.user=null
      state.isAuthenticated=false
    state.error = action.payload || action.error.message;
    })
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;