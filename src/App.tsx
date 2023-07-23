import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Organization from "./routes/organization/Organization";
import Header from "./components/header/Header";
import Claim from "./routes/claim/Claim";
import { WagmiConfigProvider } from "./web3/wagmi/WagmiConfigProvider";

function App() {
  return (
    <>
      <WagmiConfigProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Organization />} />
          <Route path="/claim" element={<Claim />} />
        </Routes>
      </WagmiConfigProvider>
    </>
  );
}

export default App;
