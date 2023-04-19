import { Box, Grid, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

const KeplrButton = lazy(() => import("../../components/keplr-button"));

export default function Header() {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ my: 3 }}
    >
      <Grid
        item
        xs={12}
        sm={"auto"}
        sx={{ textAlign: { xs: "center" }, mb: { xs: 3, sm: 0 } }}
      >
        <MuiLink
          to="/"
          color={"secondary"}
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "normal" },
            "& img": {
              xs: { height: "80px" },
              sm: { height: "130px" },
            },
          }}
          component={Link}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1">
              <Box sx={{ mx: 2, display: "inline-block" }} component={"span"}>
                Equirock
              </Box>
            </Typography>
          </Box>
        </MuiLink>
      </Grid>

      <Grid
        item
        xs={12}
        sm={"auto"}
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <Suspense fallback={<Loading />}>
          <KeplrButton />
        </Suspense>
      </Grid>
    </Grid>
  );
}
