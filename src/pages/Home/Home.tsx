import Container from "@mui/material/Container";
import Banner from "./Banner";
import Footer from "../../components/Footer";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Cards from "./Cards";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const banner = {
  title: "Welcome to",
  description: "Your Colourblind Assistant",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
};

const cards = [
    {
      title: 'Enchroma Colour Blindness Test',
      date: 'Find out if you are colourblind!',
      description:
        'There are an estimated 300 million people in the world with colour vision deficiency.',
      image: 'https://blog.schoolspecialty.com/wp-content/uploads/2017/09/Color-Blindness-in-the-Art-Room.jpg',
      imageLabel: 'Image Text',
      link: 'https://enchroma.com/pages/color-blindness-test?format2=number'
    },
    {
      title: 'Colour Identifier',
      date: 'Real-time Colour identification',
      description:
        'With this application, you can point your camera at anything and be given an accurate identification of the colour you are looking it. Based on what type of colour blindess you have, the camera will also automatically colour correct the view to allow you to see colour more accurately.',
      image: 'https://michelf.ca/img/shots/sim-daltonism/sim-d.en.4.jpg',
      imageLabel: 'Image Text',
      link: '/coloridentifier',
    },
  ];

function Home() {
  return (
    <>
      <div className="bg-gray-200 h-96">
        <div className="p-[24px]">
          <Banner post={banner} />
        </div>
      </div>
      <div className="bg-gray-400 h-96">
        <div className="p-[24px]">
        <Grid container spacing={2}>
            {cards.map((post) => (
              <Cards key={post.title} post={post} />
            ))}
          </Grid>
          </div>
      </div>
      <div className="bg-gray-800 h-96"></div>
      <Footer title="Viiicky" description="Your Colourblind Asssistant" />
    </>
  );
}

export default Home;
