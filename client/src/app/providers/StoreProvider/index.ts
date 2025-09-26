import {configureStore} from "@reduxjs/toolkit";

import {rootReducer} from "./rootReducer";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: process.env.NODE_ENV === "development",
        immutableCheck: process.env.NODE_ENV === "development"
    })
});


export default store;

