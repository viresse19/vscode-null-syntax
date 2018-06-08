import * as C from 'color';

export const colors = {
  foregrounds: [
    '#e0e0e0',
    '#dadada',
    '#cacaca',
    '#bababa',
  ],

  back: '#02011A',

  red: '#D11F4E',
  orange: '#D7561B',
  yellow: '#E1FB55',
  gold: '#FF69B4',
  grass: '#ABD22A',
  lime: '#B2E668',
  teal: '#159587',
  cyan: '#00CCDD',
  blue: '#054EC3',
  purple: '#371985',
  darkPurple: '#151E4C',

  shade: '#808080',
  shade1: '#747474',
  shade2: '#646464',
  shade3: '#3a3a3a',
};

export const ansiColours = {
  black: '#02011A',
  red: '#D11F4E',
  green: '#FF69B4',
  // green: '#ABD22A',
  yellow: '#E1FB55',
  blue: '#321E7C',
  magenta: '#AA00AA',
  cyan: '#00CCDD',
  white: '#AAAAAA',
};

const dry: any = {};

export const elements = {
  importantText: C(colors.cyan).lighten(0.5).desaturate(0.5).hex(),
  text: colors.foregrounds[1],
  background: dry.background = C(colors.back)
    .mix(C(colors.blue))
    .mix(C(colors.purple).desaturate(0.4))
    .darken(0.6).desaturate(0.34).hex(),

  // Not sure where these get used
  bracketsForeground: colors.red,
  bracketContentsForeground: colors.darkPurple,

  punctuation: colors.shade1,
  operator: colors.red,
  keyword: colors.red,
  keywordControl: colors.red,
  dataStructures: colors.shade,

  terminator: colors.shade3,
  delimiter: colors.shade2,
  brace: colors.shade2,
  block: colors.shade3,
  string: C(colors.grass).lighten(0.2).desaturate(0.1).hex(),
  regexp: colors.blue,
  quote: colors.shade1,
  comment: C(colors.blue).lighten(0.2).desaturate(0.4).hex(),
  annotation: C(colors.blue).desaturate(0.2).hex(),
  annotation2: C(colors.blue).desaturate(0.45).lighten(0.15).hex(),
  annotation3: C(colors.blue).mix(C(colors.teal), 0.5).desaturate(0.44).darken(0.12).hex(),

  function: C(colors.purple).lighten(0.3).hex(),

  variable: colors.cyan,
  support: C(colors.lime).mix(C(colors.foregrounds[1])).hex(),
  supportType: colors.red,
  supportFunction: colors.lime,
  storage: colors.shade,
  storage2: colors.shade1,
  entity: colors.red,
  constant: C(colors.teal).mix(C(colors.cyan).desaturate(0.5)).hex(),
  class: colors.cyan,

  propWrite: colors.teal,
  propRead: colors.shade,

  caret: '#ffffff',
  selection: colors.lime + '30',
  selectionBorder: colors.lime + '70',
  lineHighlight: C(dry.background).darken(0.2).hex(),
  findHighlight: colors.yellow + '40',
  guide: colors.foregrounds[1] + '35',
  activeGuide: colors.foregrounds[1] + '50',
  invisibles: colors.foregrounds[1] + '05',
};
