import { CardItem } from "../card-item/card-item";

export const CardList = (props) => {
    const cardItems = props.cards.map((card) => <li><CardItem/></li>);

    return (
        <ul className="card-list">
            {cardItems}
        </ul>
    );
}