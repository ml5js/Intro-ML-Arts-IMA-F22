let faceapi, video, faceResults;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  faceapi = ml5.faceApi(video, modelReady);
  faceapi.detect(gotResults);

  noFill();
  strokWeight(4);
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
    // console.log(result);
    faceResults = result;
    faceapi.detect(gotResults);
  }
}

function draw() {
  image(video, 0, 0, width, height);
  if (faceResults && faceResults.length > 0) {
    let face = faceResults[0].alignedRect._box;
    rect(face._x, face._y, face._width, face._height);
  }
}
