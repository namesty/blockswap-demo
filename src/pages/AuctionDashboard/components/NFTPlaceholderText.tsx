import { Grid, styled, Typography } from "@mui/material";
import React from "react";

const TextContainer = styled(Grid)({
  height: "100%",
  width: "100%",
});

const StyledText = styled(Typography)({
  fontSize: 64,
  background: "-webkit-linear-gradient(#eee, #333)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

export const NFTPlaceholderText = ({ value }: { value: string }) => {
  return (
    <TextContainer container alignItems={"center"} justifyContent={"center"}>
      <Grid item>
        <StyledText>{value}</StyledText>
      </Grid>
    </TextContainer>
  );
};
