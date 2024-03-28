import { makeAutoObservable } from "mobx";

class UserStore {
    authToken = "";
    constructor() {
        this.authToken = window.localStorage.getItem('token')
        makeAutoObservable(this)
    }

    setAuthToken = (token) => {
        this.authToken = token;
        window.localStorage.setItem('token', JSON.stringify(token))
    }

    getToken = () => {
        return this.authToken?.substring(1, this.authToken.length - 1) ?? ''
    }

    logout() {
        window.localStorage.removeItem('token')
        this.access_token = null
    }
}

const userStore = new UserStore();

export default userStore