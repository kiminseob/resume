import * as en from './en';
import * as kr from './kr';

function messages(isKorean) {
  return isKorean ? kr : en;
}

export default messages;
