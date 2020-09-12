// Set constraints for the video stream
var constraints, constraints1, constraints2;
constraints1 = { video: { facingMode: "user" }, audio: false };
constraints2 = { video: { facingMode: "environment" }, audio: false };
//var track = null;
constraints = constraints1;

// Define constants / select DOMs
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    backCam = document.querySelector("#camera--back"),
    frontCam = document.querySelector("#camera--front");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            //track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

function selectFrontCam(){

    constraints = constraints1;
    cameraStart();

};

function selectBackCam(){

    constraints = constraints2;
    cameraStart();

};

// Take a picture when cameraTrigger is tapped
function takePhoto() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraSensor.getContext("2d").st
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};

// clicks & show image when click is pressed
cameraTrigger.addEventListener('click', takePhoto)

// Start the video stream when the window loads (with front camera)
window.addEventListener("load", cameraStart, false);

// events for selecting front & back cam
backCam.addEventListener('click', selectBackCam);
frontCam.addEventListener('click', selectFrontCam);
