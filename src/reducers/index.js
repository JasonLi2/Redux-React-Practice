import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "A Cruel Angel's Thesis", duration: "4:03" },
        { title: "Tank!", duration: "3:29" },
        { title: "Goya no Machiawase", duration: "3:01" }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});