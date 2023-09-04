type TUserId = string;

export type TCardItem = {
    url?: string;
    title: string;
    id: string;
    userId: TUserId;
    likes: TUserId[];
}