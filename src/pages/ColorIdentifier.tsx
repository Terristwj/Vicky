import { useState } from "react";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";

// Color Identifier plugins
import { FastAverageColor } from "fast-average-color";
import { GetColorName } from "hex-color-to-color-name";

function ColorIdentifier() {
    const [source, setSource] = useState("");
    const [colorName, setColorName] = useState("");
    const [colorHex, setColorHex] = useState("");
    const [colorIsLight, setColorIsLight] = useState(false);

    // Insert the media into the DOM
    const handleCapture = (target: any) => {
        // Check if the user uploaded a file
        if (target.files.length !== 0) {
            // Check if the file is an image or video
            if (
                ["image/gif", "image/jpeg", "image/png"].includes(
                    target.files[0]["type"]
                )
            ) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);

                // Display the media
                setSource(newUrl);

                // Get the color
                const fac = new FastAverageColor();
                fac.getColorAsync(newUrl)
                    .then((color) => {
                        setColorHex(color.hex);
                        setColorName(GetColorName(color.hex.slice(1)));
                        setColorIsLight(color.isLight);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
            // If file is not an image or video
            else {
                alert("Please select an image or video file!");
            }
        }
    };

    return (
        <div className="h-full text-center p-[24px]">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12}>
                        {/* Media Upload */}
                        <h1 className="text-3xl font-bold align-text-bottom indieFlower">
                            Choose a media type:&nbsp;
                        </h1>
                        <div>
                            <input
                                id="media-input"
                                className="hidden"
                                type="file"
                                capture="environment"
                                onChange={(e) => handleCapture(e.target)}
                            />
                            <label
                                htmlFor="media-input"
                                className="block h-full"
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <PhotoCameraRoundedIcon
                                        sx={{ fontSize: 50 }}
                                        color="primary"
                                    />
                                </IconButton>
                            </label>
                        </div>
                        {/* Media Upload END */}
                        {/* Captured Media */}
                        {source && (
                            <Box
                                display="flex"
                                justifyContent="center"
                                border={1}
                                className="w-10/12 max-w-sm mx-auto mb-1"
                            >
                                <img
                                    src={source}
                                    alt={"snap"}
                                    width="100%"
                                    height="fit-content"
                                ></img>
                            </Box>
                        )}
                        {/* Captured Media END */}
                    </Grid>

                    {/* Media Response */}
                    {source && (
                        <Grid
                            item
                            xs={12}
                            className="pt-1 border-t border-black"
                        >
                            <div
                                style={{
                                    backgroundColor: colorHex,
                                    width: "50px",
                                    height: "50px",
                                    margin: "0px auto 5px",
                                }}
                            ></div>
                            <h1 className="text-2xl font-bold indieFlower">
                                The average color is
                                <br />
                                <span
                                    style={{
                                        color: colorHex,
                                        backgroundColor: colorIsLight
                                            ? "black"
                                            : "white",
                                    }}
                                >
                                    &nbsp;{colorName}&nbsp;
                                </span>
                            </h1>
                        </Grid>
                    )}
                    {/* Media Response END */}
                </Grid>
            </Container>
        </div>
    );
}

export default ColorIdentifier;
