import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Link, styled } from "@mui/material";
import { Address } from "../../../types";
import { NFTPlaceholderText } from "./NFTPlaceholderText";
import { BidStatus } from "../../../services/NFTs/types";
import { toShortAddress } from "../../../utils";

const NFTNumber = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  fontWeight: "bold",
  top: -7.5,
  borderRadius: 4,
  width: 50,
  position: "absolute",
}));

const StyledNFTCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
}));

const NFTCardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
}));

const NFTImageContainer = styled(Box)(({ theme }) => ({
  height: 242,
  width: 336,

  border: "10px solid",
  borderRadius: "50%",
  borderImageSlice: 1,
  borderWidth: "3px",
  borderImageSource: theme.palette.gradient,

  "& > img": {
    width: "100%",
    height: "auto",
    maxWidth: 309,
    maxHeight: 176,
  },
}));

const MainTextContainer = styled(Grid)({
  gap: 5,
});

const NFTBody = styled(CardContent)(({ theme }) => ({
  width: 336,
  padding: 16,
  boxSizing: "border-box",
}));

interface Props {
  id: string;
  index: number;
  bidCount: string;
  winningBid: string;
  endBlock: string;
  winnerAddress: Address;
  status: BidStatus;
  imageURI: string;
}

export const NFTCard = ({
  id,
  index,
  bidCount,
  winnerAddress,
  winningBid,
  endBlock,
  imageURI,
}: Props) => {
  return (
    <NFTCardContainer>
      <StyledNFTCard>
        <NFTNumber>
          <Typography color="text.secondary" align="center">
            #{index}
          </Typography>
        </NFTNumber>
        <NFTImageContainer>
          {imageURI === "" ? (
            <NFTPlaceholderText value={id} />
          ) : (
            <CardMedia component="img" image={imageURI} alt="id" />
          )}
        </NFTImageContainer>

        <NFTBody>
          <MainTextContainer container direction="column">
            <Grid item>
              <Typography variant="body1" color="text.primary">
                Bid Count: {bidCount}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.primary">
                Winning Bid: {winningBid}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.primary">
                End Block: {endBlock}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.primary">
                Winner:{" "}
                <Link
                  color={"primary"}
                  target={"_blank"}
                  href={`https://etherscan.io/address/${winnerAddress}`}
                >
                  {toShortAddress(winnerAddress)}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="primary">
                Time Left: {BidStatus.INACTIVE ? "Finished" : "Active"}
              </Typography>
            </Grid>
          </MainTextContainer>
        </NFTBody>
        <CardActions disableSpacing>
          <Button color="primary" variant="contained" fullWidth disabled={true}>
            Bidding closed
          </Button>
        </CardActions>
      </StyledNFTCard>
    </NFTCardContainer>
  );
};
