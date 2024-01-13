import { createSlice } from '@reduxjs/toolkit'

export const artistSlice = createSlice({
  name: 'artistData',
  initialState:{
     artistData:{}
  },
  reducers: {
    getArtistData: (state,action) => {
    
        state.artistData = action.payload;
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
export const {artistData,clearData} = artistSlice.actions

export default artistSlice.reducer