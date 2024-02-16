import { configureStore } from "@reduxjs/toolkit";
import peliculasReducer from "../features/peliculas";

export default configureStore ({
    reducer: {
        peliculas: peliculasReducer
    }
})