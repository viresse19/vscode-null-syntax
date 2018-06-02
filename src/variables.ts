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
  yellow: '#BBD900',
  gold: '#bfa383',
  grass: '#BBD900',
  lime: '#009D4D',
  teal: '#3BC6AE',
  cyan: '#009BA9',
  blue: '#311F76',
  purple: '#954EB8',
  darkPurple: '#31273F',

  shade: '#9f9f9f',
  shade1: '#949494',
  shade2: '#727272',
  shade3: '#4a4a4a',
};

export const elements = {
  importantText: colors.foregrounds[0],
  text: colors.foregrounds[1],
  background: C(colors.back).mix(C(colors.red).darken(0.5)).hex(),

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
  string: colors.cyan,
  regexp: colors.blue,
  quote: colors.shade1,
  comment: colors.purple,
  annotation: C(colors.darkPurple).saturate(0.6).hex(),
  annotation2: C(colors.darkPurple).desaturate(0.35).lighten(0.15).hex(),
  annotation3: C(colors.darkPurple).mix(C(colors.teal), 0.5).desaturate(0.34).darken(0.12).hex(),

  function: colors.orange,

  variable: colors.yellow,
  support: C(colors.yellow).mix(C(colors.foregrounds[1])).hex(),
  supportType: colors.red,
  supportFunction: colors.lime,
  storage: colors.shade,
  storage2: colors.shade1,
  entity: colors.shade,
  constant: colors.teal,
  class: colors.teal,

  propWrite: colors.yellow,
  propRead: colors.shade,

  caret: '#ffffff',
  selection: colors.lime + '30',
  selectionBorder: colors.lime + '70',
  findHighlight: colors.yellow + '40',
  guide: colors.foregrounds[1] + '35',
  activeGuide: colors.foregrounds[1] + '50',
  invisibles: colors.foregrounds[1] + '05',
};
