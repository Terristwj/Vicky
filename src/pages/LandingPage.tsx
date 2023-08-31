import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import Grid from "@mui/material/Grid";
import Winners from "../img/winners.jpg";
import Award from "../img/most-creative.jpg";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "../components/card";

const githubBanner =
    "https://img.shields.io/badge/-Github-black?style=flat-square&logo=github";

const linkedInBanner =
    "https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=linkedin";

const team = [
    {
        name: "Glen Wangsanegara",
        title: "Chief Executive Officer (CEO)",
        description: `The video editor and project manager. Manages the team's documents. The Manager.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/0gw0",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/glen-wangsanegara/",
                    banner: linkedInBanner,
                },
            ],

            footer_note: "posting-time",
        },
    },
    {
        name: "Adrian Koh Chun Lip",
        title: "Chief Operating Officer (COO)",
        description: `The key reporter of the team. Responsible for the reports and documentation. The Great Writer.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/adriank0h",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/adrian-koh-17075a227/",
                    banner: linkedInBanner,
                },
            ],
            footer_note: "npm-install",
        },
    },
    {
        name: "Owen Goh Heng Yi",
        title: "Chief Marketing Officer (CMO)",
        description: `The marketing and business lead. Setup of the first pitch deck iteration. The Businessman.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/owengohh",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/owengohh/",
                    banner: linkedInBanner,
                },
            ],
            footer_note: "HDL",
        },
    },
    {
        name: "Naufal Syaqil Bin Azmi",
        title: "Chief Product Officer (CPO)",
        description: `The origin story of Viiicky. Frontend UI/UX React developer. The Envisionary.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/nafutofu",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/naufal-syaqil-b7702b28b/",
                    banner: linkedInBanner,
                },
            ],
            footer_note: "cooked-meat",
        },
    },
    {
        name: "Yap Jie Wei Ryan",
        title: "Chief Design Officer (CDO)",
        description: `The insights and assistance for slide decks. Main actor of the video skit. The Creative Actor.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/ryulchi",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/ryanyaap/",
                    banner: linkedInBanner,
                },
            ],
            footer_note: "here",
        },
    },
    {
        name: "Tan Wei Jun, Terris",
        title: "Chief Technology Officer (CTO)",
        description: `The coder behind the scenes, maintains the codebase. The Fullstack Developer.`,
        footer_content: {
            socials: [
                {
                    link: "https://github.com/Terristwj",
                    banner: githubBanner,
                },
                {
                    link: "https://www.linkedin.com/in/terristan/",
                    banner: linkedInBanner,
                },
            ],
            footer_note: "colors-are-hard",
        },
    },
];

function LandingPage() {
    return (
        <>
            {/* Hero */}
            <div className="space-y-5 font-bold text-center pb-7 pt-14">
                <div className="sm:space-y-5">
                    <h1 className={"text-8xl text-[#000000] indieFlower"}>
                        <span className="text-9xl">V</span>
                        <span className="text-[#EE0000]">i</span>
                        <span className="text-[#00EE00]">i</span>
                        <span className="text-[#0000EE]">i</span>cky
                    </h1>
                </div>
                <div className="text-xl font-light md:text-4xl indieFlower">
                    Your Colourblind Asssistant
                </div>
                <div>
                    <Link to="/">
                        <Button variant="contained">
                            Experience our Website Today
                        </Button>
                    </Link>
                </div>
                <div className="space-y-2 ">
                    <Stack
                        direction="row"
                        spacing={1}
                        className="justify-center"
                    >
                        <Chip
                            label="SMU Ellipsis"
                            variant="outlined"
                            color="error"
                        />
                        <Chip
                            icon={<CodeIcon />}
                            label="Tech Series 2023 Hackathon Project"
                            variant="outlined"
                            color="primary"
                        />
                    </Stack>
                    <Chip
                        icon={<EmojiEventsIcon />}
                        label="Most Creative Solution Award"
                        variant="outlined"
                        color="warning"
                    />
                </div>
            </div>
            {/* Hero END */}

            {/* Team */}
            <div className="bg-gray-200 pb-7 pt-7">
                <h2 className="mb-5 text-4xl font-bold text-center">
                    <span className="montserrat">Dream Team</span> -&nbsp;
                    <span className="indieFlower">Meme Team</span>
                    <br />
                    Key Members
                </h2>
                <div className="grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3">
                    {team.map((member) => (
                        <Card
                            key={member.description}
                            className="text-center text-white transition duration-300 bg-gray-800 border-none hover:scale-105 hover:bg-gradient-to-r hover:from-red-300 hover:via-green-200 hover:to-blue-300 hover:text-black hover:font-bold"
                        >
                            <CardHeader className="flex pb-5">
                                <CardTitle className="text-3xl font-bold sm:text-2xl md:text-xl lg:text-2xl">
                                    {member.name}

                                    <CardDescription className="text-sm">
                                        {member.title}
                                    </CardDescription>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="x-5 ">
                                {member.description}
                            </CardContent>

                            {member.footer_content && (
                                <CardFooter className="flex-col gap-y-5">
                                    {member.footer_content.socials && (
                                        <div className="flex m-auto space-x-2">
                                            {member.footer_content.socials.map(
                                                (social) => (
                                                    <Link
                                                        key={social.link}
                                                        to={social.link}
                                                    >
                                                        <img
                                                            src={social.banner}
                                                            alt={member.name}
                                                        />
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {member.footer_content.footer_note && (
                                        <CardDescription className="text-sm italic">
                                            {member.footer_content.footer_note}
                                        </CardDescription>
                                    )}
                                </CardFooter>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
            {/* Team END */}

            {/* Video */}
            <div className="px-5 py-12 bg-gray-700">
                <h2 className="mb-5 text-4xl font-bold text-center text-white">
                    <span className="montserrat">Video</span>
                </h2>
                <div className="w-[380px] h-[210px] md:w-[720px] md:h-[400px] lg:w-[950px] lg:h-[530px] mx-auto">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/gTMW-ZFXwGg"
                        title="Team Vicky ElLipsis HAckathon"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            {/* Video END */}

            {/* Photos */}
            <div className="px-5 py-12 bg-gray-800">
                <h2 className="mb-5 text-4xl font-bold text-center text-white">
                    <span className="montserrat">Photo</span>
                    <span className="indieFlower"> and </span>
                    <span className="montserrat">Award</span>
                </h2>

                <Grid container>
                    <Grid xs={12} md={6} item>
                        <img
                            src={Winners}
                            srcSet={Winners}
                            loading="lazy"
                            alt="Team Vicky"
                        />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <img
                            src={Award}
                            srcSet={Award}
                            loading="lazy"
                            alt="Most Creative Solution Award"
                        />
                    </Grid>
                </Grid>
            </div>
            {/* Photos END */}

            {/* Photos */}
            <div className="px-5 py-12 bg-gray-900">
                <h2 className="mb-5 text-4xl font-bold text-center text-white">
                    <span className="montserrat">Presentation</span>
                    &nbsp;
                    <span className="indieFlower">Deck</span>
                </h2>
                <div className="w-full h-[230px] md:h-[400px] lg:h-[530px]">
                    <iframe
                        title="Presentation"
                        className="w-full h-full"
                        loading="lazy"
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFs2rj4YTM&#x2F;view?embed"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
