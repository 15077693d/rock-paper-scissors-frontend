/* eslint-disable camelcase */
import { useConnectWallet } from '@web3-onboard/react'
import { useWeb3Onboard } from '@web3-onboard/react/dist/context'
import { ethers, utils } from 'ethers'
import BaseButton from '../../componets/buttons/BaseButton/BaseButton'
import { RockPaperScissorsCoinAddres } from '../../config/contract'
import useIsMoblie from '../../hooks/useIsMoblie'
import { RockPaperScissorsCoin__factory } from '../../types'
import { Container } from './ConnectFacuetButtonsContainer.elements'

export default function ConnectFacuetButtonsContainer({
  ...args
}) {
  const isMoblie = useIsMoblie()
  const [{ wallet }, connect] = useConnectWallet()
  const {
    state: {
      actions: { preflightNotifications },
    },
  } = useWeb3Onboard()
  return (
    <Container {...args}>
      <BaseButton
        varient={'contained'}
        width={isMoblie ? '40%' : '150px'}
        height={isMoblie ? '40px' : '40px'}
        onClick={async () => {
          await connect()
        }}
      >
        connect
      </BaseButton>
      <BaseButton
        varient={'contained'}
        width={isMoblie ? '40%' : '150px'}
        height={isMoblie ? '40px' : '40px'}
        onClick={async () => {
          const provider = wallet?.provider
          if (provider) {
            const rockPaperScissorsCoin =
              RockPaperScissorsCoin__factory.connect(
                RockPaperScissorsCoinAddres,
                new ethers.providers.Web3Provider(
                  provider,
                ).getSigner(),
              )
            await preflightNotifications({
              sendTransaction: () =>
                rockPaperScissorsCoin
                  .faucet(utils.parseEther('100'))
                  .then((tx) => tx.hash),
            })
          }
        }}
      >
        faucet
      </BaseButton>
    </Container>
  )
}
