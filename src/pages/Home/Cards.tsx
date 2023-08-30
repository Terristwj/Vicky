import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

interface Cards {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
        link: string;
    };
}

export default function Cards(props: Cards) {
    const { post } = props;

    return (
        <Grid item xs={12} lg={6}>
            <CardActionArea href={post.link}>
                <Card
                    sx={{
                        display: "flex",
                        height: {
                            lg: "400px",
                            xl: "250px",
                        },
                    }}
                    elevation={24}
                >
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 250,
                            display: { xs: "none", md: "block" },
                        }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}
