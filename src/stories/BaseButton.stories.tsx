import BaseButton from '../componets/buttons/BaseButton/BaseButton'

export default {
  title: 'BaseButton',
  component: BaseButton,
}

export const Contained = () => (
  <BaseButton
    varient={'contained'}
    width={'200px'}
    height={'70px'}
  >
    Press me
  </BaseButton>
)

export const Outlined = () => (
  <BaseButton
    varient={'outlined'}
    width={'200px'}
    height={'70px'}
  >
    Press me
  </BaseButton>
)
