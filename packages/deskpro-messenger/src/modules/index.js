import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import chat, { chatEpic } from './chat';
import tickets from './tickets';
import guest from './guest';
import info, { loadAppInfoEpic } from './info';

export const rootReducer = combineReducers({
  guest,
  chat,
  tickets,
  info
});
export const rootEpic = combineEpics(chatEpic, loadAppInfoEpic);
