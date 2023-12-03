import {configureStore} from '@reduxjs/toolkit';
import {enableMapSet} from 'immer';
import homeSlice from './slices/homeSlice/slice';
import generalSlice from './slices/generalSlice/slice';
import {setInfoPopup} from "./slices/popupSlice/slice.ts";

enableMapSet();

const middleware =
    ({dispatch}: any) =>
        (next: (arg0: any) => any) =>
            async (action: any) => {
                if (typeof action === 'function') {
                    return next(action)
                        .unwrap()
                        .catch(() => dispatch(setInfoPopup('error.messages.something-wrong')))
                }
                return next(action);
            };

const store = configureStore({
    reducer: {
        home: homeSlice,
        general: generalSlice,
    },
    devTools: import.meta.env.VITE_APP_ENV === 'local',
    middleware: getDefaultMiddleware =>
        [middleware, ...getDefaultMiddleware({serializableCheck: false})],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
