Image_Array=["mars.jpg","mars 2.png","mars 3.jpg"];
var RandomNumber=Math.floor(Math.random()*3)
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=100;
rover_y=100;
background_image=Image_Array[RandomNumber];
rover_image="rover.png";
function add(){
    background_load=new Image();
    background_load.onload=uploadBackground;
    background_load.src=background_image;
    rover_load=new Image();
    rover_load.onload=uploadRover;
    rover_load.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_load,0,0,1000,800);
}
function uploadRover(){
    ctx.drawImage(rover_load,rover_x,rover_y,100,100);
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
    console.log("left");
    left()
    }
    if(keypressed=="39"){
        console.log("right");
        right()   
    }
    if(keypressed=="38"){
        console.log("up");
        up()       
    }
    if(keypressed=="40"){
        console.log("down");
        down()

    }
    
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
    uploadBackground();
    uploadRover();

    }
}
function right(){
    if(rover_x<900){
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
    
}
function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
    }
    
function down(){
    if(rover_y<700){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
    
}
