import { TCardItem } from '@types';
import { CardItem } from '@components';
import classes from './card-list.module.scss';

type TCardListProps = {
    // cards: Promise<TCardItem[]>;
    cards: TCardItem[];
}

export const CardList = (props: TCardListProps) => {
    // async function getCardItems() {
    //     const cards = await props.cards;

    //     return cards.map((card, index) => <li key={index}><CardItem imageSrc={card.imageSrc} title={card.title}/></li>);
    // }
    const cardItems = props.cards.map((card, index) => <li key={index}><CardItem imageSrc={card.imageSrc} title={card.title}/></li>);

    return (
        <ul className={classes.cardList}>
            {/* {getCardItems()} */}
            {cardItems}
        </ul>
    );
}