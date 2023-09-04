import { TCardItem } from "@types";

export function loadCards(): Promise<Array<TCardItem>> {
    return fetch(
        'http://localhost:8200/cards',
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        }
    ).then((response) => response.json());
}