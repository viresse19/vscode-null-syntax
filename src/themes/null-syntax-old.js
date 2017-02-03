import C from 'color'
import { colors, elements } from './variables'

export default {
  uuid           : "32bk64fa-d60n-4858-a5fc-5164xc49a2b8",
  name           : "Null-Syntax",
  semanticClass  : "Null-Syntax",
  // colorSpaceName : "sRGB",
  // gutterSettings : {

  // },
  settings: [
    //
    // ROOT
    //

    {
      settings: {
        background                : colors.back,
        caret                     : elements.caret,
        foreground                : colors.fore,
        invisibles                : elements.invisibles,
        selection                 : elements.selection,
        selectionBorder           : elements.selectionBorder,
        lineHighlight             : C(colors.back).darken(0.2).hexString(),
        guide                     : elements.guide,
        activeGuide               : elements.activeGuide,
        findHighlight             : elements.findHighlight,
        bracketsForeground        : colors.red,
        bracketContentsForeground : colors.blue,
      }
    },

    // PROPS (ASSIGNMENT / WRITE / GENERIC)

    {
      scope: `
        meta.object-literal.key
      `,
      settings: { foreground: elements.propWrite }
    },

    // PROPS (DESTRUCTURING / READ)
    {
      scope: `
        meta.object-binding-pattern variable.object.property,
        meta.array-binding-pattern variable.object.property
      `,
      settings: { foreground: elements.propRead }
    },


    {
      scope: 'string, numeric',
      settings: { foreground: elements.string }
    },

    {
      scope: `
        support.function,
        entity.name.function
      `,
      settings: { foreground: elements.function }
    },

    {
      scope: `
        keyword.operator, json.punctuation.separator,
        punctuation.separator.key, punctuation.separator.key-value,
        punctuation.definition.scalar.folded,
        yaml.chomping-indicator,
        punctuation.definition.sequence.item
      `,
      settings: { foreground: elements.operator }
    },

    {
      scope: 'meta.brace, braces.without-arguments.arguments',
      settings: { foreground: elements.brace }
    },
    {
      scope: 'storage, storage.type, storage.type.function',
      settings: { foreground: elements.storage }
    },

    {
      scope: `
        keyword.reserved, keyword.control, constant.language.import-export-all,
        css.keyword.other.unit
      `,
      settings: { foreground: elements.keyword }
    },

    // CONSTANTS

    {
      scope: `
        language.this, language.super, support.builtin, variable.object.support.node,
        support.process, constant.support, support.class, constant.language,
        markup.heading.section
      `,
      settings: { foreground: elements.constant }
    },


    {
      scope: 'language',
      settings: { fontStyle: 'italic' }
    },

    {
      scope: `
        function-call, entity.name.function-call, definition.entity.name.function, tag.entity.name
      `,
      settings: { foreground: elements.function }
    },

    {
      scope: `
        meta.definition.variable,
        variable.parameter
      `,
      settings: { fontStyle: 'bold' }
    },

    // // Disabled because it can't be guaranteed yet
    //
    // {
    //   scope: `
    //     punctuation.definition.objectliteral.var,
    //     punctuation.definition.objectliteral.function,
    //     punctuation.definition.objectliteral.method,
    //     punctuation.definition.block.objectliteral,
    //     punctuation.definition.export.default.objectliteral,
    //     array.literal.brace.square
    //   `,
    //   settings: { fontStyle: 'bold', foreground: elements.dataStructures }
    // },

    {
      scope: 'regex',
      settings: { foreground: elements.regexp }
    },
    {
      scope: `
        punctuation, string.quoted.punctuation,
        string.template.punctuation, meta.delimiter,
        punctuation.accessor, punctuation.separator,
        markup.heading, punctuation.definition.switch-statement,
        import.keyword.control.from,
        key.template.expression.template-expression,
        punctuation.definition.string.quoted.begin,
        punctuation.definition.string.template.begin,
        punctuation.definition.string.quoted.end,
        punctuation.definition.string.template.end,
        punctuation.definition.parameters.begin,
        punctuation.definition.parameters.end,
        punctuation.definition.parameters.begin.objectliteral,
        punctuation.definition.parameters.end.objectliteral,
        punctuation.definition.begin.objectliteral.template,
        punctuation.definition.end.objectliteral.template
      `,
      settings: { foreground: elements.punctuation }
    },

    {
      scope: 'punctuation.terminator',
      settings: { foreground: elements.terminator }
    },

    // COMMENTS
    {
      scope: `comment`,
      settings: { foreground: elements.comment }
    },
    {
      scope: `
        meta.type.annotation
      `,
      settings: { foreground: elements.commentPunctuation }
    },
    {
      scope: `
        annotation support.type.primitive
      `,
      settings: { fontStyle: "underline" }
    }
  ],
}
