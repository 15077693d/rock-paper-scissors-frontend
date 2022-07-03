import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import RuleCard from '../../cards/RuleCard/RuleCard'
import { BaseRulesButton } from './RulesButton.elements'

export const RulesButton = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <AnimatePresence>
        {active && (
          <RuleCard
            handleClickCross={() =>
              setActive(false)
            }
          />
        )}
      </AnimatePresence>
      <BaseRulesButton
        onClick={() => setActive(true)}
        varient={'outlined'}
        width={'128px'}
        height={'40px'}
      >
        rules
      </BaseRulesButton>
    </>
  )
}
