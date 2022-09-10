const mainColors = {
  black1: '#2f333c',
  black2: 'rgba(0,0,0,0.5)',
  black3: '#9b9b9b',
  light1: '#b5af95',
  light2: '#d9d9d9',
  light3: '#e8e8e8',
  white: '#ffffff',
};

export const colors = {
  primary: mainColors.black1,
  secondary: mainColors.light1,
  tertiary: mainColors.light2,
  quartiary: mainColors.light3,
  text: {
    primary: mainColors.light1,
    secondary: mainColors.black2,
    tertiary: mainColors.black3,
  },
  input: {
    primary: mainColors.light2,
  },
  button: {
    primary: {
      background: mainColors.light1,
      text: mainColors.black1,
    },
    secondary: {
      background: mainColors.light2,
      text: mainColors.black1,
    },
    disable: {
      background: mainColors.light3,
      text: mainColors.light1,
    },
  },
};
