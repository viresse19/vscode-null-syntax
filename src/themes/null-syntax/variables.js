import C from 'color'

export const colors = {
  fore   : '#dbdbdb',
  back   : '#1c1b1a',

  red    : '#e79d8d',
  orange : '#fdbd7d',
  yellow : '#e2d294',
  gold   : '#bfa383',
  grass  : '#abc78a',
  lime   : '#6fb050',
  teal   : '#a0dab0',
  cyan   : '#a1dbe3',
  blue   : '#96b3f2',
  purple : '#aca6c9',

  shade  : '#a0a0a0',
  shade1 : '#909090',
  shade2 : '#707070',
  shade3 : '#4a4a4a',
}

export const elements = {
  punctuation     : colors.shade1,
  operator        : colors.red,
  keyword         : colors.red,
  keywordControl  : colors.red,
  dataStructures  : colors.grass,

  terminator         : colors.shade3,
  delimiter          : colors.shade2,
  brace              : colors.shade2,
  block              : colors.shade3,
  string             : colors.cyan,
  regexp             : colors.blue,
  quote              : colors.shade1,
  comment            : colors.purple,
  commentPunctuation : C(colors.shade2, C(colors.comment)).hexString(),
  commentStorage     : colors.shade,

  function        : colors.orange,

  variable        : colors.yellow,
  support         : C(colors.yellow, C(colors.fore)).hexString(),
  supportType     : colors.red,
  supportFunction : colors.lime,
  storage         : colors.shade,
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
  invisibles      : colors.fore + '10',
}
