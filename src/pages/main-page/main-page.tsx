import { TCardItemProps } from "../../components/card-item/card-item";
import { CardList } from "../../components/card-list/card-list";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { Profile } from "../../components/profile/profile";
import classes from './main-page.module.scss';

import elbrusImgSrc from './../../assets/img/elbrus.jpg';
import karachaevskImgSrc from './../../assets/img/karachaevsk.jpg';
import dombaiImgSrc from './../../assets/img/dombai.jpg';

const MainPage = (props) => {
    const cards: TCardItemProps[] = [
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
    ]

    return (
        <div className={classes.mainPage}>
            <Header isLoggedIn={true} route={'main-page'}/>
            <Main>
                {/* <div className={classes.profile}> */}
                    <Profile className={classes.profile}/>
                {/* </div> */}
                <div className={classes.cardList}>
                    <CardList cards={cards} />
                    {/* <CardList cards={cards} className={classes.cardList}/> */}
                </div>
            </Main>
            <Footer/>
        </div>
    );
};

export default MainPage;