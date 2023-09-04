import { TUserData } from "@types";

const token: string = '432bf811-862b-b1f2-f46c-2e05a9383f66';

export function loadUserData(): Promise<TUserData> {
    return fetch(
        'http://localhost:8200/user/profile',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            method: 'GET'
        }
    ).then((response) => response.json());
}