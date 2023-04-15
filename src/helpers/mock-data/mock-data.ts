import elbrusImgSrc from './img/elbrus.jpg';
import karachaevskImgSrc from './img/karachaevsk.jpg';
import dombaiImgSrc from './img/dombai.jpg';
import avatar from './img/avatar.jpg';

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
