import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import vicky from '../../img/Viiicky.png';

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
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'relative',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container spacing = {4} alignItems = "center" justifyContent="center">
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom align="center">
              {post.title}
            </Typography>
            <Paper>
                <img src={vicky} alt="Logo" width={150} height={150} className ="mx-auto"></img>
            </Paper>
            <Typography variant="h5" color="inherit" paragraph align = "center">
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}