import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import vicky from "../../img/Viiicky (2).png";

interface BannerProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        title: string;
    };
}

export default function Banner(props: BannerProps) {
    const { post } = props;

    return (
        <Paper
            elevation={2}
            sx={{
                position: "relative",
                color: "#fff",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${post.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {
                <img
                    style={{ display: "none" }}
                    src={post.image}
                    alt={post.imageText}
                />
            }
            <Grid
                alignItems="center"
                justifyContent="center"
                sx={{
                    paddingY: { xs: 5, md: 12 },
                }}
            >
                <Box
                    sx={{
                        maxWidth: { xs: "325px", md: "400px", lg: "500px" },
                        marginX: "auto",
                    }}
                >
                    <Typography
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        align="center"
                        sx={{
                            paddingY: { xs: "10px", md: "15px", lg: "20px" },
                            backgroundColor: "rgba(66, 66, 66, 0.8)",
                        }}
                        marginBottom={0}
                    >
                        {post.title}
                    </Typography>
                    <Paper>
                        <img src={vicky} alt="Logo" className="mx-auto"></img>
                    </Paper>
                    <Typography
                        variant="h5"
                        color="inherit"
                        paragraph
                        align="center"
                        sx={{
                            paddingY: { xs: "10px", md: "15px", lg: "20px" },
                            backgroundColor: "rgba(66, 66, 66, 0.8)",
                            m: 0,
                        }}
                        marginTop={0}
                    >
                        {post.description}
                    </Typography>
                </Box>
            </Grid>
        </Paper>
    );
}
