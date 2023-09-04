// type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// // type TRequestFn = (
// //     url: string,
// //     body: BodyInit | null,
// //     method: TMethod,
// // ) => Promise<Response>


// export const request = (url, method, body) => {
//     const headers = { 'Content-Type': 'application/json' };
//     const config = { method, headers };

//     // if (this._token) {
//     //     headers['Authorization'] = 'Bearer ' + this._token;
//     // }

//     if (method !== 'GET') {
//         config.body = JSON.stringify(body);
//     }

//     return fetch(
//         `http://localhost:8200${ url }`,
//         config
//     ).then((response) => response.json());
// }