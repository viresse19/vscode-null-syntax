import C from 'color'

export const colors = {
  fore  : '#d2d2d2',
  fore2 : '#ddd',

  foregrounds: [
    "#e0e0e0",
    "#dadada",
    "#cacaca",
    "#bababa",
  ],

  back  : '#201f1f',

  red        : '#e79d8d',
  orange     : '#fdbd7d',
  yellow     : '#e2d294',
  gold       : '#bfa383',
  grass      : '#abc78a',
  lime       : '#6fb050',
  teal       : '#a0dab0',
  cyan       : '#a1dbe3',
  blue       : '#96b3f2',
  purple     : '#aca6c9',
  darkPurple : '#716e89',

  shade  : '#9f9f9f',
  shade1 : '#949494',
  shade2 : '#727272',
  shade3 : '#4a4a4a',
}

export const elements = {
  punctuation     : colors.shade1,
  operator        : colors.red,
  keyword         : colors.red,
  keywordControl  : colors.red,
  dataStructures  : colors.shade,

  terminator : colors.shade3,
  delimiter  : colors.shade2,
  brace      : colors.shade2,
  block      : colors.shade3,
  string     : colors.cyan,
  regexp     : colors.blue,
  quote      : colors.shade1,
  comment    : colors.purple,
  annotation : colors.darkPurple,
  annotation2 : C(colors.darkPurple).lighten(0.2).hexString(),

  function        : colors.orange,

  variable        : colors.yellow,
  support         : C(colors.yellow, C(colors.fore)).hexString(),
  supportType     : colors.red,
  supportFunction : colors.lime,
  storage         : colors.shade,
  storage2        : colors.shade1,
  entity          : colors.shade,
  constant        : colors.teal,
  class           : colors.teal,

  propWrite       : colors.yellow,
  propRead        : colors.shade,

  caret           : '#ffffff',
  selection       : colors.lime + '30',
  selectionBorder : colors.lime + '70',
  findHighlight   : colors.yellow + '40',
  guide           : colors.fore + '35',
  activeGuide     : colors.fore + '50',
  invisibles      : colors.fore + '05',
}
