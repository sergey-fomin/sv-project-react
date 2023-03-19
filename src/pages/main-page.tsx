import { CardList } from "../components/card-list/card-list";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { Profile } from "../components/profile/profile";

export const MainPage = (props) => {
    return (
        <div>
            <Header/>
            <Main>
                <Profile/>
                <CardList/>
            </Main>
            <Footer/>
        </div>
    );
}