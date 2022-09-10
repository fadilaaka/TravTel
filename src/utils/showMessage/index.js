import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: '#cc0000',
    color: colors.white,
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: '#DFF2BF',
    color: colors.text.secondary,
  });
};
