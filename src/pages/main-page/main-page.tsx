import classes from './main-page.module.scss';
import { useEffect, useState } from "react";
import { TCardItem } from "@types";
import { CardList, Profile } from '@components';
import { loadMockCards, mockData } from '@mocks';

const MainPage = (props) => {
    const [cards, setCards] = useState<TCardItem[]>([]);

    useEffect(
        function() {
            loadMockCards().then(setCards);
        }, []
    );
    return (
        <>
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
                <CardList cards={cards} />
            </div>
        </>
    );
};

export default MainPage;