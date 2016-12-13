import C from 'color'

export const colors = {
  fore   : '#dbdbdb',
  back   : '#1c1b1a',

  red    : '#e79d8d',
  orange : '#fdbd7d',
  yellow : '#e2d294',
  gold   : '#d2be6d',
  grass  : '#b4dc8d',
  lime   : '#6fb050',
  cyan   : '#a1dbe3',
  blue   : '#96b3f2',
  purple : '#aca6c9',

  shade  : '#a0a0a0',
  shade1 : '#909090',
  shade2 : '#707070',
  shade3 : '#505050',
}

export const elements = {
  punctuation     : colors.shade1,
  operator        : colors.red,
  keyword         : colors.red,
  keywordControl  : colors.red,

  terminator      : colors.shade2,
  delimiter       : colors.shade1,
  brace           : colors.shade2,
  string          : colors.cyan,
  regexp          : colors.blue,
  quote           : colors.shade1,
  comment         : colors.purple,
  commentStorage  : colors.shade,

  function        : colors.orange,

  variable        : colors.yellow,
  support         : C(colors.yellow, C(colors.fore)).hexString(),
  supportType     : colors.red,
  supportFunction : colors.lime,
  storage         : colors.shade,
  entity          : colors.shade,
  constant        : colors.grass,
  class           : colors.grass,

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
