import { Grid } from "@mui/material";

import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "../../components/Footer";

const banner = {
    title: "Welcome to",
    description: "Your Colourblind Assistant",
    image: "https://source.unsplash.com/random?wallpapers",
    imageText: "Banner Background",
};

const cards = [
    {
        title: "Enchroma Colour Blindness Test",
        date: "Find out if you are colourblind!",
        description: `There are an estimated 300 million people 
            in the world with colour vision deficiency. 
            An average person typically sees up to 1 million 
            shades of color. In the eyes of the colour blind, 
            there is a greater overlap of the red and green cones sensitivity, 
            reducing the number of shades seen by up to 90% 
            and causing frequent color confusion.`,
        image: "https://blog.schoolspecialty.com/wp-content/uploads/2017/09/Color-Blindness-in-the-Art-Room.jpg",
        imageLabel: "Colourblind Test",
        link: "https://enchroma.com/pages/color-blindness-test?format2=number",
    },
    {
        title: "Colour Identifier",
        date: "Real-time Colour identification",
        description: `With this application, you can point your camera 
            at anything and be given an accurate identification 
            of the colour you are looking it. 
            Based on what type of colour blindess you have, 
            the camera will also automatically colour correct 
            the view to allow you to see colour more accurately.`,
        image: "https://michelf.ca/img/shots/sim-daltonism/sim-d.en.4.jpg",
        imageLabel: "Colour Identifier",
        link: "/coloridentifier",
    },
    {
        title: "Experience With Colurs",
        date: "Try it now!",
        description: `Experience first hand what it is like to be colourblind. 
            Find out that even the smallest things that you might have 
            taken for granted are actually problems faced by the colourblind. 
            From shopping for clothes to even cooking meat 
            with your friends are difficult for them.`,
        image: "https://feweek.co.uk/wp-content/uploads/2022/10/Colleen-Marshall-work-together-collaborate-feat.jpg",
        imageLabel: "Experience",
        link: "/experience",
    },
    {
        title: "About us",
        date: "Learn about our origin story!",
        description: `We have a colourblind person in our group. 
            At first, we joked around about his colourblindness 
            but the more we listened, the more we realized that the 
            issues he faced were not light at all. 
            What more, the colour rectifying glasses from Enchroma 
            cost over 200 dollars...`,
        image: "https://i.imgur.com/Rby4U4E.jpeg",
        imageLabel: "Image Text",
        link: "/aboutus",
    },
];

interface ICard {
    title: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    link: string;
}

// Divide cards into rows of 2
var rows: ICard[][] = [];
for (var i = 0; i < cards.length; i += 2) {
    rows.push(cards.slice(i, i + 2));
}

function Home() {
    return (
        <>
            <div className="bg-gray-200 px-[24px] pb-[24px]">
                <Banner post={banner} />
            </div>
            <div className="bg-gray-400 p-[24px]">
                <Grid container spacing={2}>
                    {rows[0].map((post) => (
                        <Cards key={post.title} post={post} />
                    ))}
                </Grid>
            </div>
            <div className="bg-gray-800 p-[24px]">
                <Grid container spacing={2}>
                    {rows[1].map((post) => (
                        <Cards key={post.title} post={post} />
                    ))}
                </Grid>
            </div>
            <Footer />
        </>
    );
}

export default Home;
