import { CardList } from "../../components/card-list/card-list";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { Profile } from "../../components/profile/profile";
import classes from './main-page.module.scss';

import elbrusImgSrc from './../../assets/img/elbrus.jpg';
import karachaevskImgSrc from './../../assets/img/karachaevsk.jpg';
import dombaiImgSrc from './../../assets/img/dombai.jpg';
import avatar from './../../assets/img/avatar@2x.jpg';

const mockData = {
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

const MainPage = (props) => {
    return (
        <div className={classes.mainPage}>
            <Header
                isLoggedIn={props.isLoggedIn}
                route={props.route}
                profileEmail={mockData.profileEmail}
                onStateChange={props.handleStateChange}
            />
            <Main>
                { props.isLoggedIn &&
                    <div className={classes.profile}>
                        <Profile
                            avatarSrc={mockData.profileAvatarSrc}
                            name={mockData.profileName}
                            occupation={mockData.profileOccupation}
                        />
                    </div>
                }
                <div className={classes.cardList}>
                    <CardList cards={mockData.cards} />
                </div>
            </Main>
            <Footer/>
        </div>
    );
};

export default MainPage;