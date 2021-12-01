import React from "react";
import { AppBar, Button, Grid, styled, Toolbar } from "@mui/material";
import { ReactComponent as BlockSwapLogo } from "../assets/logos/blockswap-logo.svg";
import { useWeb3 } from "@chainsafe/web3-context";
import { toShortAddress } from "../utils";

const WhiteBlockSwapLogo = styled(BlockSwapLogo)({
  filter: "brightness(0) invert(1)",
});

const ButtonContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
}));

export const Header = () => {
  const { onboard, address } = useWeb3();

  const onClickConnect = async () => {
    await onboard?.walletSelect();
    await onboard?.walletCheck();
  };

  const onClickLogout = async () => {
    await onboard?.walletReset();
  };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <WhiteBlockSwapLogo />
          </Grid>
          <Grid item>
            {address ? (
              <ButtonContainer container>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={onClickLogout}
                  >
                    Logout
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    color="primary"
                    variant="contained"
                    LinkComponent={"a"}
                    href={`https://etherscan.io/address/${address}`}
                    target={"_blank"}
                  >
                    {toShortAddress(address)}
                  </Button>
                </Grid>
              </ButtonContainer>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={onClickConnect}
              >
                Connect
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
