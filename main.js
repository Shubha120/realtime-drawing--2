function setup(){
    canvas = createCanvas(600,600);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.size(600,600);
    video.position(100,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet has been loaded');
}

function gotPoses(results){
    console.log(results);
}