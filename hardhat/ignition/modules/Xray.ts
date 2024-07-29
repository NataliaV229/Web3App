import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const XrayModule = buildModule("XrayModule", (m) => {
  const account = m.getAccount(0);

  const xray = m.contract("Xrays", [account], {});

  return { xray };
});

export default XrayModule;
