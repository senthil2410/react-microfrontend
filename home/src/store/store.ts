import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";

const asyncReducer: { [key: string]: Reducer } = {};

const createRootReducer = () =>
  combineReducers({
    ...asyncReducer,
  });

export const store = configureStore({
  reducer: createRootReducer(),
});

const replaceReducer = () => {
  store.replaceReducer(createRootReducer());
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dynamicSlice = (key: string, reducer: Reducer) => {
  if (!asyncReducer[key]) {
    asyncReducer[key] = reducer;
    replaceReducer();
  }
};
