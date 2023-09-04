class Api {
    private _token: string | null = null;

    constructor() {}

    private request(url, method, body?) {
        const headers = { 'Content-Type': 'application/json' };
        const config = { method, headers, body };

        if (this._token) {
            headers['Authorization'] = 'Bearer ' + this._token;
        }

        if (method !== 'GET') {
            config.body = JSON.stringify(body);
        }

        return fetch(
            `http://localhost:8200${ url }`,
            config
        ).then((response) => response.json());
    }

    public saveToken(token) {
        this._token = token;
        localStorage.setItem('token', token);
        console.log('token saved in LS!', token);
    }

    public removeToken() {
        this._token = null;
        localStorage.removeItem('token');
    }

    public restoreToken() {
        this._token = localStorage.getItem('token');

        return { hasTokenInStorage: !!this._token }
        // return new Promise((resolve, reject) => {
        //     if (this._token) {
        //         resolve(true);
        //     } else {
        //         reject(Error('No token in localStorage'));
        //     }
        // })
    }
    // restoreToken: ()=> Promise<boolean> (true: токен есть, => getProfile => context Auth: true)
    // if token in storage

    public register(request) {
        return this.request('/user/register', 'POST', request);
    }

    public login(request) {
        return this.request('/user/login', 'POST', request);
    }

    public getProfile() {
        return this.request('/user/profile', 'GET');
    }

    public getCards() {
        return this.request('/cards', 'GET');
    }

    public deleteCard(request) {
        return this.request('/cards', 'DELETE', request);
    }

    public createCard(request) {
        return this.request('/cards', 'POST', request);
    }

    public likeCard(request) {
        return this.request('/cards/like', 'POST', request);
    }

}

export const api = new Api();
