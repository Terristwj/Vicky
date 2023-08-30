import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Footer from "../../components/Footer";

export default function About() {
    return (
        <Grid container sx={{ height: { md: "92vh" } }}>
            <Grid
                item
                xs={12}
                md={6}
                lg={7}
                sx={{
                    backgroundImage: "url(https://i.imgur.com/C7YaTtT.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginX: "auto",
                    height: {
                        xs: "100px",
                        md: "auto",
                    },
                }}
            />
            <Grid xs={12} md={6} lg={5}>
                <Box
                    sx={{
                        mt: { xs: 4, md: 8 },
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "dark grey",
                    }}
                >
                    <Typography variant="h3">About Us</Typography>
                    <Grid container margin={3}>
                        <Typography
                            alignContent="center"
                            justifyContent="center"
                            variant="h5"
                        >
                            We have a colourblind person in our group. At first,
                            we joked around about his colourblindness but the
                            more we listened, the more we realised that the
                            issues he faced were not light at all. What more,
                            the colour rectifing glasses from enchroma cost over
                            200 dollars which we thought was unreasonable since
                            the ability to see colour should naturally be free
                            for everybody. Thus we decided to build an
                            accessible and free way for all colourblind people
                            to be able to identify colours.
                        </Typography>
                    </Grid>
                </Box>
                <Footer />
            </Grid>
        </Grid>
    );
}
