import React from "react";
import PrincipalInformation from "../components/PrincipalInformation";
import Description from "../containers/Description";
import { Grid, CardMedia, Stack } from "@mui/material";

function UserCard(props) {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "15px",
      }}
    >
      <Grid item xs={3}>
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: "50%",
            marginLeft: "5px",
          }}
        ></CardMedia>
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserCard;
