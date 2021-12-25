import { observable, makeObservable, action } from 'mobx';
import messages from 'messages';
import defaultColor from 'scss/color/defaultColor.module.scss';
import darkModeColor from 'scss/color/darkModeColor.module.scss';

class GnbStore {
  isKorean = true;

  message = messages(this.isKorean);

  isDarkMode = false;

  themeColor = defaultColor;

  constructor() {
    makeObservable(this, {
      isKorean: observable,
      message: observable,
      isDarkMode: observable,
      themeColor: observable,
      toggleLanguage: action,
      toggleDarkMode: action,
    });
  }

  toggleLanguage() {
    this.isKorean = !this.isKorean;
    this.message = messages(this.isKorean);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeColor = this.isDarkMode ? darkModeColor : defaultColor;
  }
}

const gnbStore = new GnbStore();
export default gnbStore;
