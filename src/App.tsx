import Home from "#Home";

import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { WagmiConfig } from "wagmi";

import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="*" element={<Home />} />{" "}
        </Routes>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
