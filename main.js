Webcam.set({
    width: 300,
    height: 300,
    image_formate: "png",
    png_quality: 90
});
cam = document.getElementById("webcam");
Webcam.attach(cam);
function TakeSnapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
    console.log("snap taken");
}
console.log("ml5 version is " + ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sgqfd1_BY/model.json", modelLoaded);
function modelLoaded() {
    console.log("model is loaded");
}
function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log("error")
    }
    else {
        console.log(results);
        document.getElementById("firstpridiction").innerHTML = results[0].label;
        document.getElementById("secondpridiction").innerHTML = results[0].confidence;
        if(results[0].label == "Sad")
        {
            document.getElementById("emoji").innerHTML = "&#128533;";
        }
        if(results[0].label == "Great")
        {
            document.getElementById("emoji").innerHTML = "👍";
        }
        if(results[0].label == "Amazing")
        {
            document.getElementById("emoji").innerHTML = "👌";
        }
    }
}