import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import { ethers } from "ethers"

export async function connectWallet() {
    const maticProvider = new WalletConnectProvider(
        {
          host: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.RPC_API_KEY}`,
          callbacks: {
            onConnect: console.log('connected'),
            onDisconnect: console.log('disconnected!')
          }
        }
      )
    const provider = new ethers.providers.Web3Provider(maticProvider);
    return {provider: provider || null}
}


