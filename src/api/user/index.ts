import {privateClient} from '../privateClient';
import {userPath} from './path';
import {IPost, IPostCategory, IPostDto, IPostList, IPostSuccess, IUserDto} from '../../types/iUserDto';
import noop from "../../utils/noop.ts";

export class User {
    public static async getUserInfo(): Promise<IUserDto> {
        return privateClient
            .get(userPath.ME)
            .then(response => response.data)
    }

    public static async getCategories(): Promise<IPostCategory> {
        return privateClient
            .get(userPath.GET_CATEGORY)
            .then(response => response.data)
    }

    public static async getPostList(data: { limit: number; offset: number }): Promise<IPostList> {
        return privateClient
            .get(userPath.GET_POST_LIST,{
                params: {
                    limit: data.limit || 5,
                    offset: data.offset || 0,
                },
            })
            .then(response => response.data)
    }

    public static async getPost(id: number): Promise<IPost> {
        return privateClient
            .get(userPath.GET_POST.replace(':id', String(id)))
            .then(response => response.data)
    }

    public static async createPost(data: IPostDto): Promise<IPostSuccess> {
        return privateClient
            .post(userPath.CREATE_POST, data)
            .then(response => response.data)
    }

    public static async deletePost(id: number): Promise<void> {
        return privateClient
            .delete(userPath.DELETE_POST.replace(':id', String(id)))
            .then(noop)
    }

    public static async updatePost(id: number, data: IPostDto): Promise<IPostSuccess> {
        return privateClient
            .put(userPath.UPDATE_POST.replace(':id', String(id)), data)
            .then(response => response.data)
    }
}
