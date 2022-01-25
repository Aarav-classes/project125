rightWristx= 0;
leftWristx= 0;
difference= 0;
function setup(){
    Video = createCapture(VIDEO);
    Video.size(500,500);
    Canvas = createCanvas(500,500);
    Canvas.position(510,100);
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background="#808080";
    document.getElementById(font_size).innerHTML = "font size of the text will be- " + difference + "px";
    textSize(difference);
    fill('#4169e1');
    text('peter' , 50 , 400)

}
function modelLoaded(){
    console.log('Posenet is initialised');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    difference=floor(leftWristx - rightWristx);
    console.log("leftWristx= " + leftWristx + " rightWristx= " + rightWristx + " difference= " + difference);

}
}
