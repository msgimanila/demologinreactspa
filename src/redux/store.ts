import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// Configure store
const store = configureStore({
  reducer,
});

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store's dispatch method
export type AppDispatch = typeof store.dispatch;

export default store;
