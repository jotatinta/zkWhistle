import { metaMaskConnector } from '../../web3/wagmi/wagmiConfig'
import './Wallet.styles.scss'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { polygon } from '@wagmi/core/chains'
import { cutString } from '../../utils/utils'

const Wallet = () => {
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: metaMaskConnector,
    chainId: polygon.id
  })

  const handleConnect = async () => {
    if (isConnected) {
      disconnect()
    } else {
      connect()
    }
  }

  return (<div className='wallet-container'>
    <button onClick={handleConnect}>{isConnected ? `${cutString(address!,5)}` : `Connect Wallet`}</button></div>)
}

export default Wallet