import { CircularProgress, styled, Grid } from "@mui/material";
import React from "react";

const SpinnerContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(5),
}));

export const LoadingSpinner = () => {
  return (
    <SpinnerContainer container justifyContent="center" alignItems={"center"}>
      <Grid item>
        <CircularProgress />
      </Grid>
    </SpinnerContainer>
  );
};
