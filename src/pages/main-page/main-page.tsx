import { CardList } from "../../components/card-list/card-list";
import { Profile } from "../../components/profile/profile";
import classes from './main-page.module.scss';

import { mockData } from "../../helpers/mock-data/mock-data";

const MainPage = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default MainPage;