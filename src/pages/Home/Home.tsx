import Container from "@mui/material/Container";
import Banner from './Banner';

const banner = {
    title: 'Welcome to',
    description:
      "Your colourblind assistant",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
  };

function Home() {
    return (
        <>
            <div className="h-96">
                <div className="p-[24px]">
                    <Banner post={banner} />
                </div>
            </div>
            <div className="bg-gray-200 h-96"></div>
            <div className="bg-gray-400 h-96"></div>
            <div className="bg-gray-800 h-96"></div>
        </>
    );
}

export default Home;
