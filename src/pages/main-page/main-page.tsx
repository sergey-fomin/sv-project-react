import classes from './main-page.module.scss';
import { useContext } from "react";
import { CardList, Profile } from '@components';
import { AuthContext, CardsContext, ProfileContext } from '@context';

const MainPage = (props) => {
    const cards = useContext(CardsContext);
    const profileData = useContext(ProfileContext);
    const { isLoggedIn } = useContext(AuthContext);
    // const updateCards = props.updateCards();

    return (
        <>
            { isLoggedIn && profileData &&
                <div className={classes.profile}>
                    <Profile
                        avatarSrc={profileData.avatar}
                        name={profileData.name}
                        occupation={profileData.description}
                    />
                </div>
            }
            <div className={classes.cardList}>
                <CardList cards={cards}/>
                {/* <CardList cards={cards} updateCards={updateCards}/> */}
            </div>
        </>
    );
};

export default MainPage;