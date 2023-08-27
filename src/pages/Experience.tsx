import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

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
            <div className="px-[48px] py-[12px] items-center">
                <Grid container>
                    <Grid item xs={12}>
                        {/* Toggle Camera Face */}
                        <div className="flex justify-center">
                            <ToggleButtonGroup
                                exclusive
                                value={isCameraInward}
                                onChange={toggleCameraFace}
                                aria-label="camera face"
                            >
                                <ToggleButton value={true} aria-label="inward">
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

                        {/* Camera Feed */}
                        {isCaptureEnable && (
                            <>
                                {/* Camera Feed Display */}
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
                            <div className="pt-1 border-t border-black">
                                <Grid container>
                                    <Grid item xs={12}>
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
                                        <div className="flex justify-center">
                                            <img src={url} alt="Screenshot" />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Experience;
