import Home from "#Home";

import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { WagmiConfig } from "wagmi";

import { projectId } from "./web3/constants";

import { wagmiClient, ethereumClient } from "./web3/connector";

const App = () => {
  const { setTheme } = useWeb3ModalTheme();
  setTheme({
    themeMode: "dark",
  });
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Home />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
