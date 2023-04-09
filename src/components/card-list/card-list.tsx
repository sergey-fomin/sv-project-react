import { type } from "os";
import { CardItem, TCardItemProps } from "../card-item/card-item";
import classes from './card-list.module.scss';

export type TCardListProps = {
    cards: TCardItemProps[];
}

export const CardList = (props: TCardListProps) => {
    const cardItems = props.cards.map((card) => <li><CardItem imageSrc={card.imageSrc} title={card.title}/></li>);

    return (
        <ul className={classes.cardList} >
            {cardItems}
        </ul>
    );
}