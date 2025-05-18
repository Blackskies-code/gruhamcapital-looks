import { Grid, Typography } from "@mui/material";
import theme from "../../../theme";

const FooterBar = () => {
  const AppBarStyle = {
    background: theme.palette.primary.main,
    width: "100%",
  };

  const TypographyStyle = {
    color: "white",
    mr: 2,
    fontSize: 25,
    fontFamily: "BiomeW01-SemiBold",
    paddingTop: 1,
    paddingBottom: 1,
  };

  const typographyBlockStyle = {
    marginLeft: "auto",
  };

  const socialMediaHandlesBlockStyle = {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 1,
  };

  const socialMediaHandleIconStyle = {
    fontSize: "2rem",
    color: theme.palette.secondary.main,
  };

  const instagramUrl =
    "https://www.instagram.com/drift_hyd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const socialMediaHandle = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <Grid sx={AppBarStyle} container>
        {/* <Grid item sx={socialMediaHandlesBlockStyle} >
                <IconButton onClick={() => { socialMediaHandle(instagramUrl) }} >
                    <InstagramIcon sx={socialMediaHandleIconStyle} />
                </IconButton>
            </Grid> */}
        <Grid sx={typographyBlockStyle}>
          <Typography variant="h5" sx={TypographyStyle} textAlign={"end"}>
            Gruham Capital Corp.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterBar;
