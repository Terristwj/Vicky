import { useState } from "react";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";

import { cn } from "../utils/tailwind";

function ColorIdentifier() {
    const [source, setSource] = useState("");

    const handleCapture = (target: any) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
            }
        }
    };

    return (
        <div className="h-full text-center p-[24px]">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className="text-4xl font-bold indieFlower">
                            Capture your image
                        </h1>
                        {source && (
                            <Box
                                display="flex"
                                justifyContent="center"
                                border={1}
                                className="w-10/12 max-w-sm mx-auto my-5"
                            >
                                <img
                                    src={source}
                                    alt={"snap"}
                                    width="100%"
                                    height="fit-content"
                                ></img>
                            </Box>
                        )}
                        <input
                            accept="image/*"
                            className="hidden"
                            id="icon-button-file"
                            type="file"
                            capture="environment"
                            onChange={(e) => handleCapture(e.target)}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <PhotoCameraRoundedIcon
                                    fontSize="large"
                                    color="primary"
                                />
                            </IconButton>
                        </label>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ColorIdentifier;
