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

    const handleCapture = (target: any) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);

                // Display the image
                setSource(newUrl);

                // Get the color
                const fac = new FastAverageColor();
                fac.getColorAsync(newUrl)
                    .then((color) => {
                        // console.log(color);
                        setColorHex(color.hex);
                        setColorName(GetColorName(color.hex.slice(1)));
                        setColorIsLight(color.isLight);

                        // container.style.backgroundColor = color.rgba;
                        // container.style.color = color.isDark ? "#fff" : "#000";
                    })
                    .catch((e) => {
                        console.log(e);
                    });
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
                                className="w-10/12 max-w-sm mx-auto mt-5 mb-2"
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

                    {source && (
                        <Grid item xs={12} className="border-t border-black">
                            <br />
                            <div
                                style={{
                                    backgroundColor: colorHex,
                                    width: "50px",
                                    height: "50px",
                                    margin: "0px auto 15px",
                                }}
                            ></div>
                            <h1 className="text-2xl font-bold indieFlower">
                                Your color is:&nbsp;
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
                </Grid>
            </Container>
        </div>
    );
}

export default ColorIdentifier;
