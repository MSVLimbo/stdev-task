import {createAsyncThunk} from '@reduxjs/toolkit';

import {NavigateFunction} from 'react-router-dom';
import {Auth} from '../../api/auth';
import {User} from '../../api/user';
import {ILoginUserDto} from '../../types/iLoginUserDto';
import {IPostList, IUserDto} from "../../types/iUserDto.ts";
import {ICreateUserDto} from "../../types/iCreateUserDto.ts";
import {SignUpErrorMessage} from "../../types/SignUpErrorMessage.ts";

export const getUserInfo = createAsyncThunk<IUserDto>(
    'general/getUserInfo',
    async (_, {rejectWithValue}) =>
        User.getUserInfo().catch(error => rejectWithValue(error?.detail)),
);

export const signIn = createAsyncThunk<
    any,
    { userData: ILoginUserDto; navigate: NavigateFunction; path: string },
    { rejectValue: string }
>(
    'general/signIn',
    (
        payload: {
            userData: ILoginUserDto;
            navigate: NavigateFunction;
            path: string;
        },
        {rejectWithValue},
    ) => {
        const {userData, navigate, path} = payload;
        Auth.login(userData)
            .then(user => {
                navigate(`${path || '/'}`);
                return user;
            })
            .catch(error => {
                return rejectWithValue(error?.detail);
            })
    }
);

export const signUp = createAsyncThunk<
    void,
    ICreateUserDto,
    { rejectValue: SignUpErrorMessage }
>(
    'general/signUp',
    (payload, {rejectWithValue}) =>
        Auth.register(payload).catch(error => {
            return rejectWithValue(error);
        }),
);

export const signOut = createAsyncThunk<void>('auth/logout', () =>
    Auth.logout().catch(error => console.log(error)),
);

export const getPostList = createAsyncThunk<IPostList, { limit: number; offset: number }>(
    'post/get-list', payload =>
        User.getPostList(payload).catch(error => error?.detail),
);

