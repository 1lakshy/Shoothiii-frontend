import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState:{
   user:{
    email:null,
    password:null,
    languages:[],
    artists:[]
   }
  },
  reducers: {
    setUserData: (state,action) => {
    
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.user.languages = action.payload.languages;
        state.user.artists = action.payload.artists;
    },
    // fetchDataStart: (state) => {
    //   state.loading = true;
    // },
    // fetchDataSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    //   state.error = null;
    // },
    // fetchDataFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    clearData: (state) => {
      state.songData ={};
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUserData} = userSlice.actions

export default userSlice.reducer