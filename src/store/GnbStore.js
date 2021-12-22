import { observable, makeObservable, action } from 'mobx';
import messages from 'messages';
import defaultColor from 'scss/color/defaultColor.module.scss';
import darkModeColor from 'scss/color/darkModeColor.module.scss';

class GnbStore {
  language = '한국어';

  message = messages(this.language);

  isDarkMode = false;

  themeColor = defaultColor;

  constructor() {
    makeObservable(this, {
      language: observable,
      message: observable,
      isDarkMode: observable,
      themeColor: observable,
      setLanguage: action,
      toggleDarkMode: action,
    });
  }

  setLanguage(value) {
    this.language = value;
    this.message = messages(this.language);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeColor = this.isDarkMode ? darkModeColor : defaultColor;
  }
}

const gnbStore = new GnbStore();
export default gnbStore;
