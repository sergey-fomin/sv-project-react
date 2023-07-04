import { CardList } from "../../components/card-list/card-list";
import { Profile } from "../../components/profile/profile";
import classes from './main-page.module.scss';

import { loadCards, mockData } from "../../helpers/mock-data/mock-data";
import { useEffect, useState } from "react";
import { TCardItem } from "../../components/card-item/card-item";

const MainPage = (props) => {
    const [cards, setCards] = useState<TCardItem[]>([]);

    useEffect(
        function() {
            loadCards().then(setCards);
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