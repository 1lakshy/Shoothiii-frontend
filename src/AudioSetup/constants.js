import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

const Constants = () => {
  const { songData } = useSelector((state) => state.searchData);

  // useEffect to update the playListData array when songData changes
  useEffect(() => {
    if (songData?.length > 0) {
      // Create a new array with the updated songData
      
      playListData = [...songData];
      console.log('Updated Playlist Data:', playListData);

  //     // You can perform additional actions with the updated array if needed
  //     // For example, you can dispatch an action to update the Redux store
  //     // dispatch(updatePlayListData(updatedPlayListData));
    }
  }, [songData]);

  return <View></View>;
};

export default Constants;

// export const Constants = () => {
//   const { songData } = useSelector((state) => state.searchData);

//   useEffect(() => {
//     if (songData?.length > 0) {
//       // Create a new array with the updated songData
      
//       playListData = [...songData];
//       console.log('Updated Playlist Data:', playListData);

//   //     // You can perform additional actions with the updated array if needed
//   //     // For example, you can dispatch an action to update the Redux store
//   //     // dispatch(updatePlayListData(updatedPlayListData));
//     }
//   }, [songData]);
//   return <View></View>
// };

// Constants();



// const setSongData =()=>{
//   if(songData?.length>0){
//     playListData.push(songData)
//   }else{
//     return
//   }
// }

// setSongData();
export var playListData =[
    {
      "title": "Zinda Banda Hindi",
      "description": "Anirudh Ravichander",
      "lyricsBy": "Irshad Kamil",
      "artist": "Raja Kumari",
      "album": "Jawan",
      "artwork": "https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNjEwNjM2._V1_UY209_CR13,0,140,209_AL_.jpg",
      "year": "2023",
      "url": "https://drive.google.com/uc?export=download&id=1IboHM7xRMu9UEEqzn63_HNREflP8PUTo"
    }]