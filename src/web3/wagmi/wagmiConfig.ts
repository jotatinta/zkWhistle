import {createConfig, configureChains} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { goerli, mainnet, polygon } from '@wagmi/core/chains'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import config from "../../config";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, mainnet, polygon],
  [publicProvider()],
)

console.log('### config.walletConnect.projectId', config.walletConnect.projectId);

export const walletConnectConnector = new WalletConnectConnector({
  chains: chains,
  options: {
    projectId: config.walletConnect.projectId,
  },
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [walletConnectConnector],
  publicClient,
  webSocketPublicClient,
})