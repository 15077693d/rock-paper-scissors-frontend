import injectedModule from '@web3-onboard/injected-wallets'
import { init } from '@web3-onboard/react'
const chains = [
  {
    id: '0xA869',
    token: 'AVAX',
    label: 'Avalanche Testnet',
    rpcUrl:
      'https://api.avax-test.network/ext/bc/C/rpc',
  },
]
const wallets = [injectedModule()]

export const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: 'ROCK PAPER SCISSORS',
    icon: '<svg>My App Icon</svg>',
    description:
      'Play ROCK PAPER SCISSORS with RPS coin!.',
  },
  // showSidebar: show instruction menu in Available Wallets
  connect: { showSidebar: false },
  notify: {
    desktop: {
      enabled: true,
      transactionHandler: (transaction) => {
        console.log({ transaction })
        return {
          type: 'success',
          message:
            'Your transaction from #1 DApp is in the mempool',
        }
      },
      position: 'bottomLeft',
    },
    mobile: {
      enabled: true,
      transactionHandler: (transaction) => {
        console.log({ transaction })
        return {
          type: 'success',
          message:
            'Your transaction from #1 DApp is in the mempool',
        }
      },
      position: 'topRight',
    },
  },
})
