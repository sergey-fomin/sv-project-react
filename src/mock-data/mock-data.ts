import elbrusImgSrc from './img/elbrus.jpg';
import karachaevskImgSrc from './img/karachaevsk.jpg';
import dombaiImgSrc from './img/dombai.jpg';
import avatar from './img/avatar.jpg';
import { TCardItem, TUserData } from '@types';


export function loadMockCards(): Promise<Array<Partial<TCardItem>>> {
    return Promise.resolve(mockData.cards);
}

export function loadMockUserData(): Promise<TUserData> { // разбить mockData на 2 части
    return Promise.resolve({
        avatar: mockData.profileAvatarSrc,
        description: mockData.profileOccupation,
        email: mockData.profileEmail,
        password: '1231',
        id: '1231',
        name: mockData.profileName
    });
}

export const mockData = {
    cards: [
        {
            url: elbrusImgSrc,
            title: 'elbrus'
        },
        {
            url: karachaevskImgSrc,
            title: 'karachaevsk'
        },
        {
            url: '',
            title: 'default'
        },
        {
            url: dombaiImgSrc,
            title: 'dombai'
        },
    ],
    profileAvatarSrc: avatar,
    profileName: 'Жак-Ив Кусто',
    profileOccupation: 'Исследователь океана',
    profileEmail: 'kusto@sutulaya.ru'
}
