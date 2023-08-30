import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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

    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center">
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Copyright site={title} href={href} />
            </Container>
        </Box>
    );
}
