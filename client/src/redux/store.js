import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfiig = {
    key: 'root',
    storage,
    version: 1,

}

const persistedReducer = persistReducer(persistConfiig, rootReducer);

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
