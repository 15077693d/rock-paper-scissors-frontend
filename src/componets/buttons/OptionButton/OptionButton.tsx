import { useState } from 'react'
import { optionSrc } from '../../../assets/Images'
import {
  Image,
  InnerContainer,
  OptionButtonProps,
  OuterContainer,
  Shadow,
  Wrapper,
} from './OptionButton.elements'

export default function OptionButton({
  optionId,
  disable = false,
  isWinner = false,
}: OptionButtonProps) {
  const [isHover, setIsHover] = useState(false)
  const [active, setActive] = useState(false)

  const hoveringShadow = <Shadow shadowId='1' />
  const winningShadow = (
    <>
      <Shadow shadowId='1' />
      <Shadow shadowId='2' />
      <Shadow shadowId='3' />
    </>
  )
  const shadow =
    (!disable && isHover && hoveringShadow) ||
    (isWinner && winningShadow)

  return (
    <Wrapper
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => {
        if (!disable) {
          setIsHover(true)
        }
      }}
      onMouseLeave={() => {
        if (!disable) {
          setIsHover(false)
        }
      }}
    >
      {shadow}
      <OuterContainer optionId={optionId}>
        <InnerContainer active={active}>
          <Image
            optionId={optionId}
            src={optionSrc[optionId]}
          />
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}
