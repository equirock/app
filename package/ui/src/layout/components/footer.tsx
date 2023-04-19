import { Grid, Link, Typography } from "@mui/material";
import { constants } from "@equirock/equirock-shared";

export default function Footer() {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ my: 5, textAlign: "center" }}
    >
      <Grid item>
        <Typography variant="caption">{new Date().getFullYear()}</Typography>
        <br />
      </Grid>
    </Grid>
  );
}
