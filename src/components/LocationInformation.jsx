import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

function LocationInformation(props) {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "15px",
        }}
      >
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <LocationOnIcon />
            <Typography variant="h6">{location}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <TwitterIcon />
            {twitter_username ? (
              <Typography variant="h6">@{twitter_username}</Typography>
            ) : (
              <Typography variant="h6">No Twitter Account</Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <LanguageIcon />
            {blog ? (
              <a target="_blank" href={blog} rel="noopener noreferrer">
                <Typography variant="h6">{blog}</Typography>
              </a>
            ) : (
              <Typography variant="h6">No Blog</Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <BusinessIcon />
            {company ? (
              <Typography variant="h6">{company}</Typography>
            ) : (
              <Typography variant="h6">No Company</Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default LocationInformation;
