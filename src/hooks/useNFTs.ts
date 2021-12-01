import { useQuery } from "react-query";
import { getNFTContractInfo } from "../services/NFTs/contract/contract";
import { getTickers } from "../services/NFTs/subgraph/subgraph";
import { Ticker } from "../services/NFTs/types";

export const useNFTs = () => {
  return useQuery<{ endBlock: string, tickers: Ticker[]}, Error>(
    ["nfts"],
    async () => {
      const contractInfo = await getNFTContractInfo();
      const tickers = await getTickers(contractInfo.endBlock)

      return {
        endBlock: contractInfo.endBlock.toString(),
        tickers
      }
    }
  );
}