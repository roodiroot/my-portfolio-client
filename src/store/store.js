import { combineReducers, configureStore } from '@reduxjs/toolkit';

import projectReducer from './reducers/projectSlice';
import langReducer from './reducers/languageSlice';

const rootReducer = combineReducers({
  projects: projectReducer,
  lang: langReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
