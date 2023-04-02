import { CardItem } from "../card-item/card-item";
import classes from './card-list.module.scss';

export const CardList = (props) => {
    const cardItems = props.cards.map((card) => <li><CardItem/></li>);

    return (
        <ul className={classes['card-list']}>
            {cardItems}
        </ul>
    );
}