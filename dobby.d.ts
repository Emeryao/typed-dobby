declare module Dobby {
    interface Response<T extends Error> {
        success: boolean;
        response: T;
    }

    interface Error {
        error_message?: string;
    }

    interface Category {
        CHID: string;
        name: string;
        slug: string;
        total_videos: number;
        category_url: string;
        cover_url: string;
    }

    interface CategoryRes extends Error {
        categories: Array<Category>;
    }

    interface Collection {
        id: string;
        title: string;
        keyword: string;
        cover_url: string;
        total_views: number;
        video_count: number;
        collection_url: string;
    }

    interface CollectionRes extends Error {
        has_more: boolean;
        total_collections: number;
        current_offset: number;
        limit: number;
        collections: Array<Collection>;
    }

    interface Video {
        vid: string;
        uid: string;
        title: string;
        keyword: string;
        channel: string;
        duration: number;
        framerate: number;
        hd: boolean;
        addtime: number;
        viewnumber: number;
        likes: number;
        dislikes: number;
        video_url: string;
        embedded_url: string;
        preview_url: string;
    }

    interface VideoListRes extends Error {
        has_more: boolean;
        total_videos: number;
        current_offset: number;
        limit: number;
        videos: Array<Video>;
    }

    interface VideoRes extends Error {
        video: Video;
    }

}
