import { CardList } from "../../components/card-list/card-list";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import { Profile } from "../../components/profile/profile";
import classes from './main-page.module.scss';

const MainPage = (props) => {
    return (
        <div className={classes['main-page']}>
            <Header isLoggedIn={true} route={'main-page'}/>
            <Main>
                <Profile/>
                {/* <CardList/> */}
            </Main>
            <Footer/>
        </div>
    );
};

export default MainPage;