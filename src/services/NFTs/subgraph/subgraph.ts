import { BigNumber } from "@ethersproject/bignumber"
import { formatEther } from "@ethersproject/units"
import { request } from "graphql-request";
import { SUBGRAPH_API_URL } from "../constants";
import { BidStatus, Ticker, TickerDTO } from "../types";
import { GET_TICKERS } from "./queries/getTickers";

export const getTickers = async (endBlock: BigNumber): Promise<Ticker[]> => {
  const tickersDTO = await request<{ tickers: TickerDTO[]}>(SUBGRAPH_API_URL, GET_TICKERS);

  return tickersDTO.tickers.map<Ticker>((dto) => ({
    id: dto.id,
    status: BigNumber.from(dto.biddingEnd).gte(endBlock)
      ? BidStatus.INACTIVE
      : BidStatus.ACTIVE,
    bidCount: dto.numberOfBidsReceived,
    winningBid: formatEther(dto.shbBid).toString(),
    winnerAddress: dto.bidder,
    imageURI: dto.imageURI,
  }));
};
