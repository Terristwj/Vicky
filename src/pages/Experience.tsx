import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { SketchPicker } from "react-color";

import Grid from "@mui/material/Grid";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { IconButton } from "@mui/material";

import CameraFrontIcon from "@mui/icons-material/CameraFront";
import CameraRearIcon from "@mui/icons-material/CameraRear";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Footer from "../components/Footer";

function Experience() {
    const [isCameraInward, setIsCameraInward] = useState<boolean>(true);
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);

    const webcamFilteredRef = useRef<Webcam>(null);
    const webcamRef = useRef<Webcam>(null);

    const [urlFiltered, setUrlFiltered] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);

    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "255",
        g: "0",
        b: "0",
        a: "0.25",
    });
    // destructuring rgba from state
    const { r, g, b, a } = sketchPickerColor;

    // Webcam Constraints
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: isCameraInward ? "user" : { exact: "environment" },
    };

    // Toggle Camera Face
    const toggleCameraFace = () => {
        setIsCameraInward(!isCameraInward);
    };

    // Capture Image
    const capture = () => {
        captureImage();
        captureFilteredImage();
    };

    const captureImage = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    // Capture Image with Filter
    const captureFilteredImage = useCallback(() => {
        const imageSrc = webcamFilteredRef.current?.getScreenshot();
        if (imageSrc) {
            setUrlFiltered(imageSrc);
        }
    }, [webcamFilteredRef]);

    return (
        <>
            <Grid container className="px-[48px] py-[24px] items-center">
                <Grid item xs={12}>
                    <div className="flex justify-center gap-10 mb-[24px">
                        {/* Block Picker from react-color and handling color on onChange event */}
                        <SketchPicker
                            color={`rgba(${sketchPickerColor.r},${sketchPickerColor.g},${sketchPickerColor.b},${sketchPickerColor.a})`}
                            onChange={(color) => {
                                setSketchPickerColor({
                                    r: color.rgb.r.toString(),
                                    g: color.rgb.g.toString(),
                                    b: color.rgb.b.toString(),
                                    a: color.rgb.a!.toString(),
                                });
                            }}
                        />
                        <div className="flex flex-col justify-center gap-3">
                            {/* Div to display the color  */}
                            <div>
                                <h1 className="text-center">Color Picker</h1>
                                <div className="flex justify-center">
                                    <div
                                        style={{
                                            backgroundColor: `rgba(${r},${g},${b},${a})`,
                                            width: 100,
                                            height: 50,
                                            border: "2px solid black",
                                            borderRadius: "5px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            {/* Toggle Camera Face */}
                            <div className="flex justify-center">
                                <ToggleButtonGroup
                                    exclusive
                                    value={isCameraInward}
                                    onChange={toggleCameraFace}
                                    aria-label="camera face"
                                >
                                    <ToggleButton
                                        value={true}
                                        aria-label="inward"
                                    >
                                        <CameraFrontIcon />
                                    </ToggleButton>
                                    <ToggleButton
                                        value={false}
                                        aria-label="outward"
                                    >
                                        <CameraRearIcon />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                            {/* Start/End Video Buttons */}
                            <div className="flex justify-center mt-1">
                                {/* Start Video Capture */}
                                {isCaptureEnable || (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setCaptureEnable(true)}
                                        endIcon={<PlayArrowIcon />}
                                    >
                                        Start
                                    </Button>
                                )}

                                {/* End Video Capture */}
                                {isCaptureEnable && (
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => setCaptureEnable(false)}
                                        endIcon={<PauseIcon />}
                                    >
                                        Pause
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Grid>

                {/* Camera Feed */}
                {isCaptureEnable && (
                    <Grid
                        container
                        sx={{
                            marginY: "1rem",
                        }}
                    >
                        {/* Camera Feed Displays */}
                        <Grid
                            container
                            item
                            xs={12}
                            sx={{
                                padding: 0,
                            }}
                        >
                            {/* With Filter */}
                            <Grid
                                item
                                xs={12}
                                md={6}
                                className="flex justify-end"
                            >
                                <div className="relative">
                                    <Webcam
                                        audio={false}
                                        ref={webcamFilteredRef}
                                        screenshotFormat="image/jpeg"
                                        mirrored={isCameraInward ? true : false}
                                        videoConstraints={videoConstraints}
                                    />
                                    <div id="overlay">
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: `rgba(${r},${g},${b},${a})`,
                                                opacity: 0.5,
                                                zIndex: 2,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Grid>
                            {/* With Filter END */}

                            {/* Without Filter */}
                            <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{ display: { xs: "none", md: "block" } }}
                            >
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    mirrored={isCameraInward ? true : false}
                                    videoConstraints={videoConstraints}
                                />
                            </Grid>
                            {/* Without Filter END*/}
                        </Grid>
                        {/* Camera Feed Displays END */}

                        {/* Video Capture Button */}
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                id="media-input"
                                className="hidden"
                                onClick={capture}
                            >
                                capture
                            </button>

                            {/* Camera Icon Button */}
                            <label
                                htmlFor="media-input"
                                className="block h-full m-auto"
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="capture picture"
                                    component="span"
                                    sx={{ paddingBottom: 0 }}
                                >
                                    <PhotoCameraRoundedIcon
                                        sx={{ fontSize: 50 }}
                                        color="primary"
                                    />
                                </IconButton>
                            </label>
                            {/* Camera Icon Button END */}
                        </Grid>
                        {/* Video Capture Button END */}
                    </Grid>
                )}
                {/* Camera Feed END */}

                {/* Photo Capture */}
                {(url || urlFiltered) && (
                    <Grid
                        container
                        sx={{
                            marginY: "1rem",
                        }}
                    >
                        {/* Photo Capture Displays */}
                        <Grid
                            container
                            item
                            xs={12}
                            sx={{
                                padding: 0,
                            }}
                        >
                            {/* With Filter */}
                            {urlFiltered && (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className="flex justify-end"
                                >
                                    <div className="relative w-full">
                                        <img
                                            src={urlFiltered}
                                            className="w-full"
                                            alt="Screenshot"
                                        />
                                        <div id="overlay">
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                                                    opacity: 0.5,
                                                    zIndex: 2,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </Grid>
                            )}
                            {/* With Filter END */}

                            {/* Without Filter */}
                            {url && (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: { xs: "none", md: "block" },
                                    }}
                                >
                                    <div>
                                        <img
                                            src={url}
                                            className="w-full"
                                            alt="Screenshot"
                                        />
                                    </div>
                                </Grid>
                            )}
                            {/* Without Filter END */}
                        </Grid>
                        {/* Photo Capture Displays END */}

                        {/* Photo Delete Button */}
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                id="media-input"
                                className="hidden"
                                onClick={capture}
                            >
                                capture
                            </button>

                            {/* Camera Icon Button */}
                            <div className="pt-3">
                                <div className="flex justify-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => {
                                            setUrl(null);
                                            setUrlFiltered(null);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                            {/* Camera Icon Button END */}
                        </Grid>
                        {/* Photo Delete Button END */}
                    </Grid>
                )}
                {/* Photo Capture END */}
            </Grid>
            <Footer />
        </>
    );
}

export default Experience;
