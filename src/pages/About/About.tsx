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
                            <p>
                                In our group, we're fortunate to have a member
                                who experiences the world in a unique way due to
                                colorblindness. Initially, we might have shared
                                some lighthearted jokes about it, but as we
                                truly began to listen and understand, it became
                                clear that the challenges he faces are far from
                                trivial.
                            </p>
                            <br />
                            <p>
                                What struck us even more was the realization
                                that solutions like color-correcting glasses
                                come with a hefty price tag of over 200 dollars.
                                This seemed unjustifiable to us, as the ability
                                to perceive colors should be a basic and freely
                                accessible experience for everyone.
                            </p>
                            <br />
                            <p>
                                Motivated by this, we made a collective decision
                                to take action. We are on a mission to create an
                                accessible and no-cost solution that empowers
                                every colorblind individual to effortlessly
                                identify colors. Our belief is that this
                                endeavor will not only enhance the lives of
                                those with colorblindness but also contribute to
                                a more inclusive and compassionate society for
                                all.
                            </p>
                        </Typography>
                    </Grid>
                </Box>
                <Footer />
            </Grid>
        </Grid>
    );
}
