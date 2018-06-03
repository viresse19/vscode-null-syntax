import * as C from 'color';

export const colors = {
  foregrounds: [
    '#e0e0e0',
    '#dadada',
    '#cacaca',
    '#bababa',
  ],

  back: '#201f1f',

  red: '#CF1C58',
  orange: '#cd772c',
  yellow: '#CFD175',
  gold: '#bfa383',
  grass: '#A2BF51',
  lime: '#009D4D',
  teal: '#5C9D8E',
  cyan: '#0BBFCF',
  blue: '#4E4AD6',
  purple: '#9C52C1',
  darkPurple: '#705693',

  shade: '#808080',
  shade1: '#747474',
  shade2: '#646464',
  shade3: '#3a3a3a',
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
