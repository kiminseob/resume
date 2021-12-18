import { observable, makeObservable, action } from 'mobx';
import { LocalStore } from 'store';

class NavStore {
  navTabValue = LocalStore.getItem('navTabValue') ?? 0;

  constructor() {
    makeObservable(this, {
      navTabValue: observable,
      updateNavTabValue: action,
    });
  }

  updateNavTabValue(value) {
    this.navTabValue = value;
    LocalStore.setItem('navTabValue', value);
  }
}

const navStore = new NavStore();
export default navStore;
