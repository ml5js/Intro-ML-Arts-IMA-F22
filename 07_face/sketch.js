let faceapi, video, faceResults;
let isMouthOpen = false;
let duckSound;
let prevResult;

function preload() {
  duckSound = loadSound("./duck.wav");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  faceapi = ml5.faceApi(video, modelReady);
  faceapi.detect(gotResults);

  noFill();
  strokeWeight(4);
  stroke(255, 0, 255);
}

function modelReady() {
  console.log("ready!");
}

function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  if (result) {
    console.log(result);
    prevResult = faceResults;
    faceResults = result;

    // Check if the mouth is open
    if (faceResults[0]) {
      let parts = faceResults[0].parts;
      let mouth = parts["mouth"];
      let mouthTop = mouth[4];
      let mouthBottom = mouth[9];
      if (mouthBottom._y - mouthTop._y > 50) {
        isMouthOpen = true;
        if (!duckSound.isPlaying()) {
          duckSound.play();
        }
      } else {
        isMouthOpen = false;
        duckSound.stop();
      }
    }

    faceapi.detect(gotResults);
  }
}

function draw() {
  image(video, 0, 0, width, height);
  if (faceResults && faceResults.length > 0) {
    // Draw the bounding box
    noFill();
    stroke(255, 0, 255);
    let face = faceResults[0].alignedRect._box;
    rect(face._x, face._y, face._width, face._height);

    // Draw parts
    fill(255, 0, 0);
    let parts = faceResults[0].parts;
    let partNames = Object.keys(parts);
    for (let i = 0; i < partNames.length; i++) {
      const part = parts[partNames[i]];
      for (let j = 0; j < part.length; j++) {
        ellipse(part[j]._x, part[j]._y, 2, 2);
      }
    }
  }
}
