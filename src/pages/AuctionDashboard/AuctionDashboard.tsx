import {
  Grid,
  Link,
  List,
  ListItem,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useNFTs } from "../../hooks/useNFTs";
import { NFTCard } from "./components/NFTCard";

const MainContainer = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  margin: "auto",
  padding: theme.spacing(4),
}));

const NFTsContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(12),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  background: theme.palette.gradient,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

export const AuctionDashboard = () => {
  const theme = useTheme();
  const { data, isLoading } = useNFTs();

  return (
    <>
      <MainContainer
        container
        direction="column"
        style={{ gap: theme.spacing(12) }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent={"center"}
            style={{ gap: 72 }}
          >
            <Grid item>
              <Title variant="h1" align="center">
                Brand Central Auction
              </Title>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs={12} sm>
                  <List>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * Blockswap is giving the first opportunity to claim a
                        StakeHouse name on mainnet to SHB holders.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * The auction will run for 5 days.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * Each day 10 StakeHouse names can be proposed on a
                        first come first serve basis.
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm>
                  <List>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * In the last 200 blocks (approx 50 minutes) each
                        additional bid will increase the time remaining by 100
                        blocks (approx 25 minutes) until someone loses the
                        battle.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * Minimum Bid increase is 2 SHB.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography color={"textPrimary"} variant="h5">
                        * Additional details on the auction{" "}
                        <Link
                          color={"primary"}
                          href="https://blog.blockswap.network/brand-central-auction-how-to-guide-3ac1f66564db"
                          target={"_blank"}
                        >
                          here
                        </Link>
                        . Read FAQ{" "}
                        <Link
                          color={"primary"}
                          href="https://blockswap.notion.site/blockswap/FAQ-Brand-Central-Auction-a5924cb32a114bbba53c0b27a77e1230"
                          target={"_blank"}
                        >
                          here
                        </Link>
                        .
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" style={{ gap: theme.spacing(9) }}>
            <Grid item>
              <Title variant="h1" align="left" color={"secondary"}>
                Tickers
              </Title>
            </Grid>
            <Grid item>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <NFTsContainer container>
                  {data ? (
                    data.tickers.map((ticker, i) => (
                      <Grid item>
                        <NFTCard
                          key={`nft-${i}`}
                          id={ticker.id}
                          index={i}
                          winnerAddress={ticker.winnerAddress}
                          status={ticker.status}
                          bidCount={ticker.bidCount}
                          winningBid={ticker.winningBid}
                          endBlock={data.endBlock}
                          imageURI={ticker.imageURI}
                        />
                      </Grid>
                    ))
                  ) : (
                    <></>
                  )}
                </NFTsContainer>
              )}
            </Grid>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
};
