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

    // {
    //   scope: 'token',
    //   settings: { foreground: elements.shade }
    // },

    // PROPS (ASSIGNMENT / WRITE / GENERIC)

    {
      scope: `
        attribute-name, property-name,
        object-literal.key, json.property-name,
        yaml.entity.name.tag
      `,
      settings: { foreground: elements.propWrite }
    },

    // PROPS (DESTRUCTURING / READ)
    {
      scope: `
        variable.property.object.parameter.object-binding-pattern,
        property.object.object-binding-pattern-variable
      `,
      settings: { foreground: elements.propRead }
    },


    {
      scope: 'token.string, token.numeric, token.constant.numeric.decimal',
      settings: { foreground: elements.string }
    },

    {
      scope: 'support.function, entity.name.function',
      settings: { foreground: elements.function }
    },

    {
      scope: `
        token.variable, support, variable.template, constant.template, entity.name,
        token.type.entity.name.new.module,
        variable.support.dom, entity.inherited-class, constant,
        support.variable.property
      `,
      settings: { foreground: colors.fore }
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
      scope: 'storage, storage.type, storage.type.function, meta.annotation',
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
        var-single-variable,
        variable.parameters.parameter, import.variable.readwrite,
        variable.parameter.arrow.declaration,
        type.entity.name.class,
        type.entity.name.expr.new,
        class.definition.field.property.variable.object,
        class.definition.property.entity.function,
        class.definition.name.method.entity.function,
        definition.entity.name.function,
        variable.readwrite.var.expr.object-binding-pattern-variable,
        attribute-name, property-name,
        object-literal.key,
        variable.property.object.parameter.object-binding-pattern,
        property.object.object-binding-pattern-variable,
        markup.heading.section,
        yaml.entity.name
      `,
      settings: { fontStyle: 'bold' }
    },
    {
      scope: `
        punctuation.definition.objectliteral.var,
        punctuation.definition.block.objectliteral.object.member,
        punctuation.definition.export.default.objectliteral,
        array.literal.brace.square
      `,
      settings: { fontStyle: 'bold', foreground: elements.keyword }
    },
    {
      scope: 'regex',
      settings: { foreground: elements.regexp }
    },
    {
      scope: `
        meta.punctuation, string.quoted.punctuation,
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
        punctuation.definition.parameters.end
      `,
      settings: { foreground: elements.punctuation }
    },

    {
      scope: 'punctuation.terminator',
      settings: { foreground: elements.terminator }
    },

    // COMMENTS
    /**
     * asdasd
     */

    /*

    asdasd // ${}
    */

    {
      scope: `comment`,
      settings: { foreground: elements.comment }
    },
    {
      scope: `
        punctuation.definition.comment.double-slash,
        punctuation.definition.comment,
        block.punctuation.definition.comment,
        export.default.punctuation.definition.comment,
        export.default.block.punctuation.definition.comment,
        export.default.punctuation.definition.comment.documentation,
        block.export.default.punctuation.definition.comment,
        block.export.default.block.punctuation.definition.comment,
        block.export.default.punctuation.definition.comment.documentation,
        punctuation.definition.comment.documentation
      `,
      settings: { foreground: elements.commentPunctuation }
    },
  ],
}
