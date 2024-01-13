import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'searchData',
  initialState:{
    songData:{},
    currentSong:{}
  },
  reducers: {
    getSearchData: (state,action) => {
    
        state.songData = action.payload;
    },
    getCurrentSong:(state,action)=>{
        state.currentSong = action.payload;
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
export const { getSearchData,getCurrentSong,clearData} = searchSlice.actions

export default searchSlice.reducer