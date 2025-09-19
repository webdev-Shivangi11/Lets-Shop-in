import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

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
//  export const checkAuth = createAsyncThunk(
//   '/auth/checkauth',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         'http://localhost:3000/auth/check-auth',
//         formData,
//         { withCredentials: true ,
//            headers: {
//           "Cache-Control":
//             "no-store, no-cache, must-revalidate, proxy-revalidate",
//         },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Signup failed');
//     }
//   }
// );
 export const checkAuth = createAsyncThunk(
  '/auth/checkauth',
  async () => {

      const response = await axios.get('http://localhost:3000/auth/check-auth',
      
        { withCredentials: true ,
           headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
        }
      );
      return response.data;
   
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

     .addCase(checkAuth.pending,(state)=>{
      state.isLoading=true

    }).addCase(checkAuth.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.user=action.payload.success ? action.payload.user:null;
      state.isAuthenticated=action.payload.success  
      // ? true: false 

    }).addCase(checkAuth.rejected,(state,action)=>{
      state.isLoading=false;
      state.user=null
      state.isAuthenticated=false
    state.error = action.payload || action.error.message;
    })

  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;