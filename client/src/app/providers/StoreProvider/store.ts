import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {RootState} from "./rootReducer";

import store from "./index";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;