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
        'There are an estimated 300 million people in the world with colour vision deficiency. An average person typically sees up to 1 million shades of color. In the eyes of the colour blind, there is a greater overlap of the red and green cones sensitivity, reducing the number of shades seen by up to 90% and causing frequent color confusion.',
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
    {
      title: 'Experience what it\'s like to be Colour blind',
      date: 'Try it now!',
      description: 'Experience first hand what it is like to be colourblind. Find out that even the smallest things that you might have taken for granted are actually problems faced by the colourblind. From shopping for clothes to even cooking meat with your friends are difficult for them.',
      image: 'https://feweek.co.uk/wp-content/uploads/2022/10/Colleen-Marshall-work-together-collaborate-feat.jpg',
      imageLabel: 'Image Text',
      link: '#',
    },
    {
      title: 'About us',
      date: 'Find out more!',
      description: 'We have a colourblind person in our group. At first, we joked around about his colourblindness but the more we listened, the more we realised that the issues he faced were not light at all. What more, the colour rectifing glasses from enchroma cost over 200 dollars which we thought was unreasonable since the ability to see colo...',
      image: 'https://i.imgur.com/Rby4U4E.jpeg',
      imageLabel: 'Image Text',
      link: '/aboutus',
    }
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
