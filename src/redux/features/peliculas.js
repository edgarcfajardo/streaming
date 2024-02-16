import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const peliculasSlice = createSlice({
  name: "peliculas",
  initialState,
  reducers: {
    addPeliculas(state, action) {
      state.push({ name: action.payload.name, completed: action.payload.completed });
    },
  },
});

export const { addPeliculas } = peliculasSlice.actions;

export default peliculasSlice.reducer;
