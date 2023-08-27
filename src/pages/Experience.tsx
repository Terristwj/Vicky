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

function Experience() {
    const [isCameraInward, setIsCameraInward] = useState<boolean>(true);
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);

    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1",
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
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
            console.log(imageSrc);
        }
    }, [webcamRef]);

    return (
        <>
            <div className="px-[48px] py-[24px] items-center">
                <Grid container>
                    <Grid item xs={12}>
                        <div className="flex justify-center gap-10 mb-[24px]">
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
                                    <h1 className="text-center">
                                        Color Picker
                                    </h1>
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
                                            onClick={() =>
                                                setCaptureEnable(true)
                                            }
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
                                            onClick={() =>
                                                setCaptureEnable(false)
                                            }
                                            endIcon={<PauseIcon />}
                                        >
                                            Pause
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Camera Feed */}
                        {isCaptureEnable && (
                            <>
                                {/* Camera Feed Display */}
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <Webcam
                                            audio={false}
                                            width={540}
                                            height={360}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            mirrored
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
                                </div>

                                <div className="flex justify-center">
                                    <Webcam
                                        audio={false}
                                        width={540}
                                        height={360}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        mirrored
                                        videoConstraints={videoConstraints}
                                    />
                                </div>

                                {/* Video Capture Button */}
                                <div className="flex justify-center">
                                    <button
                                        id="media-input"
                                        className="hidden"
                                        onClick={capture}
                                    >
                                        capture
                                    </button>
                                    <label
                                        htmlFor="media-input"
                                        className="block h-full"
                                    >
                                        <IconButton
                                            color="primary"
                                            aria-label="capture picture"
                                            component="span"
                                        >
                                            <PhotoCameraRoundedIcon
                                                sx={{ fontSize: 50 }}
                                                color="primary"
                                            />
                                        </IconButton>
                                    </label>
                                </div>
                            </>
                        )}

                        {url && (
                            <>
                                <div className="pt-1 border-t border-black">
                                    <div className="flex justify-center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                setUrl(null);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <div className="flex justify-center">
                                            <img src={url} alt="Screenshot" />
                                        </div>
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
                                </div>

                                <div className="flex justify-center">
                                    <div className="flex justify-center">
                                        <img src={url} alt="Screenshot" />
                                    </div>
                                </div>
                            </>
                        )}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Experience;
