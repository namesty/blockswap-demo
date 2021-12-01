import { AppBar, Link, styled, Typography, Grid } from "@mui/material";
import React from "react";

const BottomBar = styled(AppBar)(({ theme }) => ({
  top: "auto",
  bottom: 0,
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
}));

export const Footer = () => {
  return (
    <BottomBar color="secondary" position="static">
      <Grid container justifyContent="space-between" alignItems={"center"}>
        <Grid item>
          <Typography variant="body2" color="text.primary">
            © All rights reserved Blockswap 2021.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.primary">
            Made with fun by{" "}
            <Link
              color={"primary"}
              href="https://github.com/namesty"
              target={"_blank"}
            >
              @namesty
            </Link>
          </Typography>
        </Grid>
      </Grid>
      
    </BottomBar>
  );
};
