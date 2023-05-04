import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { darkTheme, lightTheme } from "@equirock/equirock-ui/src/lib/theme";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            my: 5,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            "& img": {
              height: "130px",
            },
          }}
        >
          <img src="/howlpack-new-small.png" />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h1">
              <Box sx={{ mx: 2, display: "inline-block" }} component={"span"}>
                Howlpack
              </Box>
            </Typography>
            <Typography variant="caption">[unofficial extension]</Typography>
          </Box>
        </Box>
        <Alert severity="info">
          The Howlpack project{" "}
          <b>is not officially affiliated with the Howl project</b>. We are
          simply fans of the Howl project and aim to build upon their innovative
          work and ideas.
        </Alert>
        <Card sx={{ p: 3, mt: 4 }} variant="outlined" color="secondary">
          <Typography variant="body1" sx={{ mb: 2 }}>
            Howlpack is a supplementary add-on for the Howl project. It extends
            the functionality and enhances the user experience of the original
            Howl project, allowing users to further customize and optimize their
            experience.
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }} component="div">
            Howlpack provides ✉️ email or 🕸️ webhook notifications when:
            <ul>
              <li>A new follower is gained</li>
              <li>A new reply is received </li>
              <li>A new like is received</li>
              <li>... and as usual much more coming</li>
            </ul>
          </Typography>

          <Box sx={{ textAlign: "center", mt: 6, mb: 3 }}>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              size="large"
              href="https://get.howlpack.social"
            >
              Go to the APP
            </Button>
          </Box>
        </Card>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="caption">
            <Link
              color={"secondary"}
              href="https://beta.howl.social/howlpack"
              target={"_blank"}
              rel="noreferrer"
            >
              howl
            </Link>{" "}
            |{" "}
            <Link
              color={"secondary"}
              href="https://twitter.com/howlpack"
              target={"_blank"}
              rel="noreferrer"
            >
              twitter
            </Link>{" "}
            |{" "}
            <Link
              color={"secondary"}
              href="https://github.com/howlpack/howlpack/"
              target={"_blank"}
              rel="noreferrer"
            >
              github
            </Link>
            <br />
            Be sure to check{" "}
            <Link
              color={"secondary"}
              href="https://beta.howl.social"
              target={"_blank"}
              rel="noreferrer"
            >
              howl.social
            </Link>{" "}
            first.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
