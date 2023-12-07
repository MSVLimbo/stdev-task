import {getRefreshToken, storeTokens} from '../../utils/token';
import {NoRefreshTokenError} from '../../types/errors/noRefreshTokenError';
import {privateClient} from '../privateClient';
import {authPath} from './path';
import {ICreateUserDto} from '../../types/iCreateUserDto';
import {publicClient} from '../publicClient';
import {ILoginUserDto} from '../../types/iLoginUserDto';
import noop from "../../utils/noop.ts";

export class Auth {
    public static async refreshAccessToken(): Promise<void> {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
            throw new NoRefreshTokenError();
        }
        return publicClient
            .post(
                authPath.REFRESH_ACCESS_TOKEN,
                {
                    headers: {Authorization: `Bearer ${refreshToken}`},
                },
            )
            .then(response => response.data)
            .then(tokens => {
                storeTokens(tokens.access, tokens.refresh);
            });
    }

    public static async register(regData: ICreateUserDto): Promise<void> {
        // @ts-ignore
        return publicClient
            .post(authPath.REGISTER, regData)
    }

    public static async logout(): Promise<void> {
        return privateClient.post(authPath.LOGOUT).then(noop).catch((err) => console.log(JSON.parse(JSON.stringify(err))));
    }

    public static async login(loginUserDto: ILoginUserDto): Promise<void> {
        const {email, password} = loginUserDto
        return publicClient
            .post(authPath.LOGIN, {email:email.value, password:password.value})
            .then(res => {
                const {token, user} = res.data;
                storeTokens(token.access, token.refresh);
                return user;
            });
    }
}
