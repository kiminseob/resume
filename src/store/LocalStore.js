class LocalStore {
  constructor() {
    this.localStorage = localStorage;
  }

  getItem(key) {
    return JSON.parse(this.localStorage.getItem(key)) ?? null;
  }

  setItem(key, item) {
    this.localStorage.setItem(key, JSON.stringify(item));
  }
}

const localStore = new LocalStore();

export default localStore;
