img = "";
status ="";
objects =[];
function setup(){
    canvas = createCanvas(1000, 800);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload(){
    img = loadImage('img_7.webp');

}


function loaded(){
console.log("Model Loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 1000, 800);
    
    if(status != " "){
        for(i= 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "status: object detected";


            fill('#FF0000');
            percent = floor(objects[i].confidence *100);
            text(objects[i].label + " "+percent + "%", objects[i].x+50, objects[i].y+50);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x+100, objects[i].y+50, objects[i].width, objects[i].height+200);
        }
    }
}