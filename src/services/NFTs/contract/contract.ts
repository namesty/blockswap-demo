import { Contract } from "@ethersproject/contracts"
import { getDefaultProvider } from "@ethersproject/providers"
import { BigNumber } from "@ethersproject/bignumber"
import { NFT_CONTRACT_ADDRESS } from "../constants";
import abi from "./abi"

interface NFTContractData {
  endBlock: BigNumber;
}

const getContract = (address: string) => new Contract(address, abi, getDefaultProvider())

export const getNFTContractInfo = async (): Promise<NFTContractData> => {
  const contract = getContract(NFT_CONTRACT_ADDRESS)

  const endBlock: BigNumber = await contract.endBlock()

  return {
    endBlock
  }
}