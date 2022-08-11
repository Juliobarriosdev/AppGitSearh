import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        sx={{
          justifyContent: "space-between",
          margin: "20px",
          alignItems: "center",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }} alignSelf="center" >
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
