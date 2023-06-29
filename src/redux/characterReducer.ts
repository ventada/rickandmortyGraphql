import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type characterType = {
  name: string;
  status: string;
  origin: string;
  species: string;
  gender: string;
};
export interface CharacterInitialState {
  character: characterType;
}

const initialState: CharacterInitialState = {
  character: {
    name: "",
    status: "",
    origin: "",
    species: "",
    gender: "",
  },
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    selectCharacter(state, action) {
      console.log(state);
      console.log(action.payload);
    },
  },
});

export const { selectCharacter } = characterSlice.actions;
export default characterSlice.reducer;
