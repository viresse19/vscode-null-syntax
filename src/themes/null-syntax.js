import C from 'color'
import { colors, elements } from './variables'

export default {
  uuid           : "32bk64fa-d60n-4858-a5fc-5164xc49a2b8",
  name           : "Null-Syntax",
  semanticClass  : "Null-Syntax",
  settings: [
    {
      settings: {
        background                : colors.back,
        caret                     : elements.caret,
        foreground                : colors.foregrounds[1],
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

    /**
     * Object property definition
     */
    {
      scope: `
        meta.class meta.field.declaration meta.definition.property variable.object.property,
        meta.object-literal.key,
        support.type.property-name.json,
        entity.name.tag.yaml,
        entity.name.section.markdown,
        meta.property-name.css,
        entity.other.attribute-name
      `,
      settings: {
        foreground: elements.propWrite,
        fontStyle: 'bold'
      }
    },

    /**
     * Destructuring
     */
    {
      scope: `
        meta.object-binding-pattern-variable variable.object.property,
        meta.parameter.object-binding-pattern variable.object.property,
        meta.array-binding-pattern-variable variable.object.property,
        meta.parameters variable.object.property
      `,
      settings: { foreground: elements.propRead }
    },

    /**
     * Strings, constants, numbers
     */
    {
      scope: `
        string,
        constant.numeric,
        markup.inline.raw.markdown
      `,
      settings: { foreground: elements.string }
    },

    // Fix templates
    {
      scope: `
        meta.template.expression
      `,
      settings: { foreground: colors.foregrounds[1] }
    },

    /**
     * Regex
     */
    {
      scope: `
        regex
      `,
      settings: { foreground: elements.regexp }
    },

    /**
     * Functions
     */
    {
      scope: `
        support.function,
        entity.name.function,
        meta.selector.css,
        entity.name.tag
      `,
      settings: { foreground: elements.function }
    },

    /**
     * Operators
     */
    {
      scope: `
        keyword.operator,
        json.punctuation.separator,
        punctuation.separator.key,
        punctuation.separator.key-value,
        punctuation.definition.scalar.folded,
        yaml.chomping-indicator,
        punctuation.definition.sequence.item,
        beginning.punctuation.definition.list.markdown
      `,
      settings: { foreground: elements.operator }
    },

    /**
     * Keywords
     */
    {
      scope: `
        keyword.reserved,
        keyword.control,
        constant.language.import-export-all,
        css.keyword.other.unit
      `,
      settings: { foreground: elements.keyword }
    },

    /**
     * Storage
     */
    {
      scope: `
        storage
      `,
      settings: { foreground: elements.storage }
    },
    {
      scope: `
        meta.var storage.type.js
      `,
      settings: { foreground: elements.storage2 }
    },

    /**
     * Constants
     */
    {
      scope: `
        variable.language.this,
        variable.language.super,
        support.class.builtin,
        support.variable.object.process,
        support.variable.object.node,
        support.variable.property.js,
        constant.language,
        markup.heading.section
      `,
      settings: { foreground: elements.constant }
    },

    /**
     * (ITALICS) Language
     */
    {
      scope: `
        variable.language,
        constant.language
      `,
      settings: { fontStyle: 'italic' }
    },

    /**
     * (BOLD) Variable assignment
     */
    {
      scope: `
        meta.definition.variable,
        variable.parameter,
        meta.import variable.other.readwrite.alias
      `,
      settings: {
        fontStyle: 'bold',
        foreground: colors.foregrounds[0],
      }
    },

    // /**
    //  * Structure Declarations (Array, Object)
    //  */
    // {
    //   scope: `
    //     meta.array.literal meta.brace.square,
    //     meta.objectliteral punctuation.definition.block
    //   `,
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: elements.dataStructures
    //   }
    // },

    /**
     * Fade out destructuring, non-literal punctuation
     */
    {
      scope: `
        punctuation.definition.binding-pattern,
        meta.object-literal.key meta.brace.square,
        punctuation.definition.template-expression
      `,
      settings: { foreground: elements.brace }
    },

    /**
     * Parenthesis
     */
    {
      scope: `
        meta.brace,
        punctuation.definition.parameters.begin,
        punctuation.definition.parameters.end
      `,
      settings: { foreground: elements.brace }
    },

    /**
     * Parameters
     */
    {
      scope: `
        punctuation.definition.parameters.begin,
        punctuation.definition.parameters.end
      `,
      settings: { fontStyle: 'bold' }
    },

    /**
     * Annotations
     */
    {
      scope: `
        meta.type.annotation,
        meta.type.declaration,
        meta.type.annotation variable.object.property
      `,
      settings: { foreground: elements.annotation }
    },
    {
      scope: `
        meta.type.annotation variable.parameter,
        meta.type.declaration variable.object.property
      `,
      settings: { foreground: elements.annotation2 }
    },
    {
      scope: `
        keyword.operator.type,
        keyword.operator.optional
      `,
      settings: { foreground: elements.punctuation }
    },

    /**
     * Annotation primitives
     */
    {
      scope: `
        support.type.primitive,
        support.type.builtin
      `,
      settings: { foreground: elements.annotation2, fontStyle: "italic" }
    },

    /**
     * Comment
     */
    {
      scope: `
        comment
      `,
      settings: { foreground: elements.comment }
    },

    /**
     * Punctuation
     */
    {
      scope: `
        punctuation,
        markup.heading,
        keyword.control.from
      `,
      settings: { foreground: elements.punctuation }
    },

    /**
     * Terminator
     */
    {
      scope: `
        punctuation.terminator
      `,
      settings: { foreground: elements.terminator }
    },

  ]
}
