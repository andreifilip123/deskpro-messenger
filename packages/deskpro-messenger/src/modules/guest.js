import { produce } from 'immer';
import _isPlainObject from 'lodash/isPlainObject';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import { from, of } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { switchMap, filter, tap, map } from 'rxjs/operators';
import { createSelector } from 'reselect';

import { APP_INIT } from './app';
import { CHAT_START, CHAT_SEND_MESSAGE } from './chat';
import { generateVisitorId } from '../utils/visitorId';

//#region ACTION TYPES
export const SET_VISITOR = 'SET_VISITOR';
//#endregion

//#region ACTIONS
export const setVisitor = (payload) => ({ type: SET_VISITOR, payload });
//#endregion

//#region EPICS
const initVisitorEpic = (action$, _, { config, api, cache }) =>
  action$.pipe(
    ofType(APP_INIT),
    switchMap(() => {
      const visitorId = cache.getValue('visitor_id') || generateVisitorId();
      if (cache.getValue('visitor_id') || config.jwt) {
        return from(api.loadUser(visitorId)).pipe(
          map((user) =>
            produce(user, (draft) => {
              draft.visitor_id = visitorId;
              draft.guest = {
                name: user.name || cache.getValue('guest.name') || _get(config, 'user.name'),
                email: user.email || cache.getValue('guest.email') || _get(config, 'user.email'),
                avatar: cache.getValue('guest.avatar') || _get(config, 'user.avatar'),
                personId: user.person_id || cache.getValue('personId')
              };
            })
          )
        );
      } else {
        api.visitorId = visitorId;
        return of({
          visitor_id: visitorId,
          guest: config.user || {
            name: null,
            email: null,
            avatar: null,
          }
        });
      }
    }),
    tap((state) => {
      cache.setValue('guest', state.guest);
      cache.setValue('visitor_id', state.visitor_id);
    }),
    map(setVisitor)
  );

const updateGuestEpic = (action$, _, { cache }) =>
  action$.pipe(
    ofType(CHAT_START, CHAT_SEND_MESSAGE),
    filter((action) => 'email' in action.payload),
    tap((action) => {
      cache.setValue('guest.name', action.payload.name);
      cache.setValue('guest.email', action.payload.email);
      cache.setValue('guest.avatar', action.payload.avatar);
    }),
    map((action) =>
      setVisitor({ guest: _pick(action.payload, ['name', 'email', 'avatar']) })
    )
  );

export const guestEpic = combineEpics(initVisitorEpic, updateGuestEpic);
//#endregion

//#region REDUCER
export default produce(
  (draft, { type, payload }) => {
    switch (type) {
      case SET_VISITOR:
        if (payload.visitor_id) {
          draft.visitorId = payload.visitor_id;
        }
        if (_isPlainObject(payload.guest) && !_isEmpty(payload.guest)) {
          draft.name = payload.guest.name || draft.name;
          draft.email = payload.guest.email || draft.email;
          draft.avatar = payload.guest.avatar || draft.avatar;
          draft.personId = payload.guest.personId || draft.personId;
        }
        return;

      default:
        return;
    }
  },
  { name: '', email: '', avatar: '' }
);
//#endregion

//#region SELECTORS
const getGuestState = (state) => state.guest;
export const getUserData = createSelector(getGuestState, (guest) =>
  _pick(guest, ['name', 'email', 'avatar'])
);
export const getVisitorId = createSelector(
  getGuestState,
  (guest) => guest.visitorId
);
export const getUser = createSelector(
  getGuestState,
  (guest) => Object.assign({}, { name: guest.name, email: guest.email, avatar: guest.avatar } )
);
export const isUserSet = createSelector(
  getGuestState,
  (guest) => !isNaN(parseInt(guest.personId, 10))
);
//#endregion
