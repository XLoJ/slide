import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    sequence: {
      diagramMarginX: 0,
      diagramMarginY: 0,
      messageMargin: 35,
      boxTextMargin: 10,
      bottomMarginAdj: 10
    }
  }
})