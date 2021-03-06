const foregroundColor = '#c4e2f2';
const backgroundColor = '#002b36';
const borderColor = '#335E69';
const cursorColor = '#add877';

const black = '#4b4b4b';
const red = '#f69648';
const green = '#add877';
const yellow = '#f6f080';
const blue = '#60a7ca';
const magenta = '#7d72c8';
const cyan = '#e05178';
const white = '#ffffff';

const brightBlack = '#4b4b4b';
const brightRed = '#dc412f';
const brightGreen = '#b5d839';
const brightYellow = '#ff9c5a';
const brightBlue = brightYellow;
const brightMagenta = magenta;
const brightCyan = cyan;
const brightWhite = white;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      brightBlack,
      brightRed,
      brightGreen,
      brightYellow,
      brightBlue,
      brightMagenta,
      brightCyan,
      brightWhite
    ],
    css: `
			${config.css || ''}
			.tab_active::before {
        border-bottom: 1px solid #002b36 !important;
			}
		`
  });
};
