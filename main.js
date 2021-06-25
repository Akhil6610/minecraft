canvas=new fabric.Canvas("myCanvas");
var block_Width=30;
var block_height=30;
playerx=10;
playery=10;
playerobject="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function (Img){
      playerobject=Img;
      playerobject.scaleToWidth(150);
      playerobject.scaleToHeight(140);
      playerobject.set({
          top:playery,
          left:playerx
      });
      canvas.add(playerobject); 
    });
}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function (Img){
      blockObject=Img;
      blockObject.scaleToWidth(block_Width);
      blockObject.scaleToHeight(block_height);
      blockObject.set({
          top:playery,
          left:playerx
      });
      canvas.add(blockObject); 
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
  keyPressed=e.keyCode;
  if(keyPressed=='38'){
    up();
  }
  if(keyPressed=='40'){
    down();
  }
  if(keyPressed=='37'){
    left();
  }
  if(keyPressed=='39'){
    right();
  }
  if(keyPressed=='87'){
    newImage("wall.jpg");
    console.log("w");
  }
  if(keyPressed=='71'){
    newImage("ground.png");
    console.log("g");
  }
  if(keyPressed=='76'){
    newImage("light_green.png");
    console.log("l");
  }
  if(keyPressed=='84'){
    newImage("trunk.jpg");
    console.log("t");
  }
  if(keyPressed=='82'){
    newImage("roof.jpg");
    console.log("r");
  }
  if(keyPressed=='89'){
    newImage("yellow_wall.png");
    console.log("y");
  }
  if(keyPressed=='68'){
    newImage("dark_green.png");
    console.log("d");
  }
  if(keyPressed=='85'){
    newImage("unique.png");
    console.log("u");
  }
  if(keyPressed=='67'){
    newImage("cloud.jpg");
    console.log("c");
  }
  if(e.shiftKey==true && keyPressed=="80"){
  block_Width=block_Width+10;
  block_height=block_height+10;
  document.getElementById("Current-Width").innerHTML=block_Width;
  document.getElementById("Current-Height").innerHTML=block_height;
  }
  if(e.shiftKey==true && keyPressed=="77"){
    block_Width=block_Width-10;
    block_height=block_height-10;
    document.getElementById("Current-Width").innerHTML=block_Width;
    document.getElementById("Current-Height").innerHTML=block_height;
  }
}
function left(){
if (playerx>0) {
  playerx=playerx-block_Width;
  canvas.remove(playerobject);
  playerupdate();
  }
}
function right(){
  if (playerx<=1400){
    playerx=playerx+block_Width;
    canvas.remove(playerobject);
    playerupdate();
    }
  }
  function up(){
    if (playery>0) {
      playery=playery-block_height;
      canvas.remove(playerobject);
      playerupdate();
      }
    }
    function down(){
      if (playery<=500) {
        playery=playery+block_height;
        canvas.remove(playerobject);
        playerupdate();
        }
      }