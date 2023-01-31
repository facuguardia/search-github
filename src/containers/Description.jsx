import React from "react";
import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";
import { Stack, Typography } from "@mui/material";

function Description(props) {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
        }}
      >
        {bio ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
}

export default Description;
