import { contractDetails } from "./abi";
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = await provider.getSigner();
export const contract = new ethers.Contract(
  contractDetails.address,
  contractDetails.abi,
  signer
);
