import { ethers } from "ethers";
import { configureChains, createClient } from "wagmi";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { bsc } from "wagmi/chains";
import { projectId } from "./constants";

const chains = [bsc];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider,
});
export const ethereumClient = new EthereumClient(wagmiClient, chains);

export const ethersPublicProvider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.ninicoin.io"
);
