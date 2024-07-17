// import { UserAction } from './action';

// export const userReducer = (state = {}, action: UserAction): UserState => {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };
// type UserState = {
//   username: string;
// };
import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';

type UserState = {
  username: string;
};

const login = createAction<UserState>('user/login');

const initialState: UserState = { username: '' };

export const userReducer: Reducer<UserState> = createReducer(initialState, (builder) => {
  builder.addCase(login, (state, action) => {
    state = action.payload;
  });
});
