import { Stack, Typography } from "@mui/material";
import React from "react";
import PaperInformation from "../../components/PaperInformation";
import LoacalInformation from "../../components/LoacalInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Has no description
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LoacalInformation userState={userState} />
    </>
  );
};

export default Description;
