import { useState } from 'react'
import RuleCard from '../../cards/RuleCard/RuleCard'
import { BaseRulesButton } from './RulesButton.elements'

export const RulesButton = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <RuleCard />
      <BaseRulesButton
        varient={'outlined'}
        width={'128px'}
        height={'40px'}
      >
        rules
      </BaseRulesButton>
    </>
  )
}
