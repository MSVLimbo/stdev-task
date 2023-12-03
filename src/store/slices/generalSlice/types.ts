import type {AnyObject} from '../../../types/anyObject';
import {IPostList} from "../../../types/iUserDto.ts";

export type GeneralState = {
    loading: boolean;
    profile: AnyObject | null;
    postList: IPostList;
};
