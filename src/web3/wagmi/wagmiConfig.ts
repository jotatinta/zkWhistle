import {createConfig, configureChains} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai } from '@wagmi/core/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import config from "../../config";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon, polygonMumbai],
  [publicProvider()],
)

export const metaMaskConnector = new MetaMaskConnector({
  chains: chains,
  options: {
    shimDisconnect: false,
  },
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [metaMaskConnector],
  publicClient,
  webSocketPublicClient,
})