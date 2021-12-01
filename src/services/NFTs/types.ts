import { Address, ID } from "../../types";

export enum BidStatus {
  ACTIVE,
  INACTIVE
}

export interface TickerDTO {
  bidder: Address;
  biddingEnd: string;
  description: string;
  id: ID;
  imageURI: string;
  name: string;
  nftClaimed: boolean;
  numberOfBidsReceived: string;
  shbBid: string;
  tokenURI: string;
  uriLastUpdated: string;
}

export interface Ticker {
  id: string;
  bidCount: string;
  winningBid: string;
  winnerAddress: Address;
  status: BidStatus;
  imageURI: string;
}