import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import Avatar from "@mui/material/Avatar";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function LandingPage() {
    return (
        <>
            <div className="space-y-5 font-bold text-center py-14">
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
                <div className="space-y-2">
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
        </>
    );
}

export default LandingPage;
