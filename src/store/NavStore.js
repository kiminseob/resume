import { observable, makeObservable, action } from 'mobx';
import messages from 'messages';

class NavStore {
  language = '한국어';

  message = messages(this.language);

  constructor() {
    makeObservable(this, {
      language: observable,
      message: observable,
      setLanguage: action,
    });
  }

  setLanguage(value) {
    this.language = value;
    this.message = messages(this.language);
  }
}

const navStore = new NavStore();
export default navStore;
