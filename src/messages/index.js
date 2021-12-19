import * as en from './en';
import * as kr from './kr';

function messages(language) {
  return language === '한국어' ? kr : en;
}

export default messages;
