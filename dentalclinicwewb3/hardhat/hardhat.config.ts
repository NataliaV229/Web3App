import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();
const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.INFURA_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: endpoint,
      accounts: [`0x${privateKey}`],
    },
  },
};

export default config;
