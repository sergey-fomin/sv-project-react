import elbrusImgSrc from './img/elbrus.jpg';
import karachaevskImgSrc from './img/karachaevsk.jpg';
import dombaiImgSrc from './img/dombai.jpg';
import avatar from './img/avatar.jpg';
import { TCardItem, TUserData } from '@types';


export function loadMockCards(): Promise<Array<TCardItem>> {
    return Promise.resolve(mockData.cards);
}

export function loadMockUserData(): Promise<TUserData> { // разбить mockData на 2 части
    return Promise.resolve({
        profileAvatarSrc: mockData.profileAvatarSrc,
        profileName: mockData.profileName,
        profileEmail: mockData.profileEmail,
        profileOccupation: mockData.profileOccupation
    });
}

export const mockData = {
    cards: [
        {
            imageSrc: elbrusImgSrc,
            title: 'elbrus'
        },
        {
            imageSrc: karachaevskImgSrc,
            title: 'karachaevsk'
        },
        {
            imageSrc: '',
            title: 'default'
        },
        {
            imageSrc: dombaiImgSrc,
            title: 'dombai'
        },
    ],
    profileAvatarSrc: avatar,
    profileName: 'Жак-Ив Кусто',
    profileOccupation: 'Исследователь океана',
    profileEmail: 'kusto@sutulaya.ru'
}
