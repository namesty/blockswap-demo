import { gql } from "graphql-request";

export const GET_TICKERS = gql`
  {
    tickers {
      id
      shbBid
      bidder
      biddingEnd
      numberOfBidsReceived
      nftClaimed
      tokenURI
      imageURI
      name
      description
      uriLastUpdated
    }
  }
`