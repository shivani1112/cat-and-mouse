
function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png");
    catImage = loadImage("cat1.png,cat2.png,cat3.png,cat4.png");
    mouseImage = loadImage("mouse1.png,mouse2.png,mouse3.png,mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = new cat(700,650);
    cat2 = new cat(680,630);
    cat3 = new cat(660,500);
    cat4 = new cat(640,480);
    mouse1 = new mouse(630,470);
    mouse2 = new mouse(630,470);
    mouse3 = new mouse(630,470);
    mouse4 = new mouse(630,470);
}

function draw() {

    background(255);
//Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;

    cat.addAnimation("catLastImage",catImg3);
    cat.changeAnimation("catLastImage")
}
  Text(mouseX + ',' + mouseY, 10, 45);



cat1.display();
cat2.display();
cat3.display();
cat4.display();
mouse1.display();
mouse2.display();
mouse3.display();
mouse4.display();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg4);
      mouse.changeAnimation("mouseTeasing");
  }


}
