import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface CopyrightProps {
    site: string;
    href: string;
}

function Copyright(props: CopyrightProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href={props.href}>
                {props.site}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Footer() {
    const title = "Viiicky";
    const description = "Your Colourblind Asssistant";
    const href = "https://vicky-nine.vercel.app/";
    const aboutUs =
        "We're a team of passionate SMU students, working to make colourblind enabling technology accessible to all.";
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            gutterBottom
                            align="center"
                        >
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                            {aboutUs}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            gutterBottom
                            align="center"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            align="center"
                        >
                            {description}
                        </Typography>
                        <Copyright site={title} href={href} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            gutterBottom
                            align="center"
                        >
                            Our Repo
                        </Typography>
                        <Link
                            href="https://github.com/Terristwj/Vicky/"
                            color="inherit"
                        >
                            <Typography textAlign="center">
                                <GitHubIcon />
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
