import { OptionId } from '../../config/option'
import bgTriangleSrc from './bg-triangle.svg'
import paperSrc from './icon-paper.svg'
import rockSrc from './icon-rock.svg'
import scissorsSrc from './icon-scissors.svg'
import ruleSrc from './image-rules.svg'
import logoSrc from './logo.svg'
export const optionSrc = {
  [OptionId.PAPER]: paperSrc,
  [OptionId.ROCK]: rockSrc,
  [OptionId.SCISSORS]: scissorsSrc,
}
export { bgTriangleSrc, ruleSrc, logoSrc }
