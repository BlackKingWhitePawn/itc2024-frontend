import { makeAutoObservable } from "mobx";

class UserStore {
    authToken = "";
    constructor() {
        makeAutoObservable(this)
    }

    setAuthToken = (token) => {
        this.authToken = token;
    }
}

const userStore = new UserStore();

export default userStore