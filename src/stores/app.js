import { makeAutoObservable } from "mobx";

class AppStore {

    constructor() {
        this.isSideBarOpened = false
        makeAutoObservable(this)
    }

    toggleSidebar = () => {
        this.isSideBarOpened = !this.isSideBarOpened
    }
}

const appStore = new AppStore();

export default appStore;