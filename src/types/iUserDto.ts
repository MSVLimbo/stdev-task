export interface IUserDto {
    id: number,
    email: string,
    first_name: string
    last_name: string,
    is_active: boolean,
    image: string
}

export interface IPostCategory {
    "id": number,
    "name": string,
    "slug": string
}

export interface IPost {
    "id": number,
    "title": string,
    "description": string,
    "image": string,
    "category": IPostCategory
    "author": {
        "id": number,
        "full_name": string
    }
}

export interface IPostDto {
    "title": string,
    "description": string,
    "image": string,
    "category": IPostCategory
}

export interface IPostList extends IPostSuccess{
    "count": number,
    "next": null | string,
    "previous": null | string,
}

export interface IPostSuccess {
    "results": IPost[]
}
