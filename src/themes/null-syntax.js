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
        entity.other.attribute-name,
        variable.other.normal.shell
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

    /**
     * Numbers
     */
    {
      scope: `
        constant.numeric
      `,
      settings: {
        foreground: colors.teal
      }
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
        entity.name.tag,
        meta.decorator
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
        beginning.punctuation.definition.list.markdown,
        punctuation.decorator

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
        keyword.other.debugger,
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
        support.class.console.js,
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
        meta.import variable.other.readwrite.alias,
        meta.class.js entity.name.type.class.js,
        meta.class.js meta.method.declaration.js meta.definition.method.js,
        meta.class.js meta.field.declaration.js meta.definition.property.js
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
        meta.indexer.declaration.ts variable.parameter.ts,
        meta.interface.ts,
        cast.expr.ts entity.name.type.ts,
        meta.type.parameters.ts entity.name.type.ts,
        meta.indexer.declaration.tsx variable.parameter.tsx,
        meta.interface.tsx,
        cast.expr.tsx entity.name.type.tsx,
        meta.type.parameters.tsx entity.name.type.tsx,
        meta.type.declaration,
        meta.type.annotation,
        meta.type.annotation variable.object.property,
        meta.class meta.type.annotation meta.object.type meta.definition.property variable.object.property,
        meta.return.type
      `,
      settings: { foreground: elements.annotation }
    },
    {
      scope: `
        meta.type.annotation variable.parameter,
        meta.type.declaration variable.object.property,
        meta.type.annotation meta.object.type variable.object.property,
        meta.type.annotation string
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
     * Interface props
     */
    {
      scope: `
        meta.interface.ts meta.definition.property.ts,
        meta.object.type.ts meta.definition.property.ts,
        meta.type.declaration.ts entity.name.type.alias.ts,
        meta.interface.ts entity.name.type.interface.ts
        meta.interface.tsx meta.definition.property.tsx,
        meta.object.type.tsx meta.definition.property.tsx,
        meta.type.declaration.tsx entity.name.type.alias.tsx,
        meta.interface.tsx entity.name.type.interface.tsx
      `,
      settings: { fontStyle: 'bold' }
    },

    /**
     * Annotation primitives
     */
    {
      scope: `
        support.type.primitive,
        support.type.builtin
      `,
      settings: { foreground: elements.annotation3, fontStyle: "italic" }
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
