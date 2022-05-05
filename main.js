var noseX=0;
var noseY=0;
var img


function preload(){
img=loadImage("clown.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("poseNet is initialised")
}

function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("black")
   // circle(noseX,noseY,30)
   image(img,noseX-15,noseY-20,35,35)
}
function take_snapshot(){
    save("myFilterimg.png")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x: "+noseX)
        console.log("nose y: "+noseY)

    }
}

