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
  disabled = false,
  isWinner = false,
  ...args
}: OptionButtonProps) {
  const [isHover, setIsHover] = useState(false)
  const hoveringShadow = <Shadow shadowId='1' />
  const winningShadow = (
    <>
      <Shadow shadowId='1' />
      <Shadow shadowId='2' />
      <Shadow shadowId='3' />
    </>
  )
  const shadow =
    (!disabled && isHover && hoveringShadow) ||
    (isWinner && winningShadow)

  return (
    <Wrapper
      {...args}
      $disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.2 }}
      whileTap={disabled ? {} : { scale: 0.9 }}
      onMouseEnter={() => {
        if (!disabled) {
          setIsHover(true)
        }
      }}
      onMouseLeave={() => {
        if (!disabled) {
          setIsHover(false)
        }
      }}
    >
      {shadow}
      <OuterContainer optionId={optionId}>
        <InnerContainer>
          <Image
            className='noselect'
            optionId={optionId}
            src={optionSrc[optionId]}
          />
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}
