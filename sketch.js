var block, block2;
var gameOverImg1, gameOverImg;
var playagainImg, playagain;
var retry, retryImg;
var youwin, youwinImg;
var pressme, pressmeImg;
var storymessage, storymessageImg;
var intromessage, intromessageImg;
var welmessage, welmessageImg;
var lasermessage, lasermessageImg;
var intronext,intronextImg, lastnext, lastnextImg;
var next, nextImg;
var warningdoor;
var bg;
var knife, knifeImg;
var laser1,laser2,laser3,laser4,laser5, laser, laserImg;
var laserblueImg, laserblue, laserblue2;
var laserright2,laserright, laserrightImg;
var machine2, machine1, machine, machine4, machineImg;
var diamondImg, diamond;
var button2Img, button2;
var buttonImg, button;
var key1Img, key1;
var realNotesImg, realNotes;
var dooropen1;
var doorkey1;
var doortreasure1;
var ringImg, ring;
var moneyImg, money;
var sackImg, sack;
var treasure, CtreasureImg, OtreasureImg, EtreasureImg;
var notes, notesImg;
var potion, potionImg;
var potion2, potion2Img;
var potion3, potion3Img;
var musicImg, music;
var thief, thiefwalkingD, thiefstandingDR, thiefwalkingL, thiefstandingLR;
var thiefwalkingR, thiefstandingRR, thiefwalkingU, thiefstandingUR;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22;
var doorkey, door2, door3, door4, door5, door6, door7, doortreasure,dooropen;
var popR, popRImg;
var popL, popLImg;

var score = 0;
var treasures = 0;
var lives = 3;
var PLAY = 2;
var END = 0;
var gameState = PLAY;

var bg_sound;
var pain_sound;
var victory_sound;
var gameOver_sound;
var claim_sound;
var click_sound;

function preload(){
  popRImg = loadImage("popR.png");
  popLImg = loadImage("popL.png");
  playagainImg = loadImage("playagain.png");
  retryImg = loadImage("retry.png");
  youwinImg = loadImage("youwin.png");
  pressmeImg = loadImage("pressme.png")
  intronextImg = loadImage("intronext.png");
  nextImg = loadImage("next.png");
  lastnextImg = loadImage("lastnext.png");
  storymessageImg = loadImage("storymessage.png");
  intromessageImg = loadImage("intromessage.png");
  welmessageImg = loadImage("welmessage.png");
  lasermessageImg = loadImage("lasermessage.png");
  gameOverImg1 = loadImage("gameOver.png");
  button2Img = loadAnimation("button2.png");
  buttonImg = loadAnimation("button2.png");
  bg = loadImage("Map.jpg");
  knifeImg = loadImage("knife.png");
  laserrightImg = loadImage("laserright.png");
  laserImg = loadImage("laser.png");
  laserblueImg = loadImage("laserblue.png");
  machineImg = loadImage("machine.png");
  diamondImg = loadImage("diamond.png");
  key1Img = loadImage("key.png");
  ringImg = loadImage("ring.png");
  moneyImg = loadImage("money.png");
  sackImg = loadImage("sack.png");
  realNotesImg = loadAnimation("realNotes.png");
  CtreasureImg = loadImage("closetreasure.png");
  OtreasureImg = loadAnimation("opentreasure.png");
  EtreasureImg = loadAnimation("emptytreasure.png");
  notesImg = loadImage("notes.png");
  potionImg = loadImage("potion.png");
  potion2Img = loadImage("potion2.png");
  potion3Img = loadImage("potion3.png");
  musicImg = loadImage("music.png");
  thiefwalkingD = loadAnimation("thiefDL.png","thiefDR.png");
  thiefstandingDR = loadAnimation("thiefDR.png");
  thiefwalkingL = loadAnimation("thiefLL.png","thiefLR.png");
  thiefstandingLR = loadAnimation("thiefLR.png");
  thiefwalkingR = loadAnimation("thiefRL.png","thiefRR.png");
  thiefstandingRR = loadAnimation("thiefRR.png");
  thiefwalkingU = loadAnimation("thiefUL.png","thiefUR.png");
  thiefstandingUR = loadAnimation("thiefUR.png");

  bg_sound = loadSound("bg_sound.mp3");
  claim_sound = loadSound("claim.mp3");
  victory_sound = loadSound("victory.mp3");
  gameOver_sound = loadSound("gameOver.mp3");
  pain_sound = loadSound("pain.mp3");
  click_sound = loadSound("click.mp3");
}

function setup() {
  createCanvas(1200,700);

  /*var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);
  } 
  else {
    canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }*/

  click_sound.setVolume(0.9);
  claim_sound.setVolume(0.9);
  gameOver_sound.setVolume(1);
  victory_sound.setVolume(0.9);
  pain_sound.setVolume(0.9);
  bg_sound.loop();
  bg_sound.setVolume(0.4);

  laser1 = createSprite(834,118);
  laser1.addImage("laser.png", laserImg);
  laser1.scale = 0.3;
  laser1.visible = true;
  laser1.debug = false;
  laser1.setCollider("rectangle",0,0,900,10);
  laser2 = createSprite(834,128);
  laser2.addImage("laser.png", laserImg);
  laser2.scale = 0.3;
  laser2.visible = true;
  laser2.debug = false;
  laser2.setCollider("rectangle",0,0,900,10);
  laser3 = createSprite(834,108);
  laser3.addImage("laser.png", laserImg);
  laser3.scale = 0.3;
  laser3.visible = true;
  laser3.debug = false;
  laser3.setCollider("rectangle",0,0,900,10);

  laser4 = createSprite(290,516);
  laser4.addImage("laser.png", laserImg);
  laser4.scale = 0.3;
  laser4.visible = true;
  laser4.debug = false;
  laser4.setCollider("rectangle",0,0,900,10);

  laser5 = createSprite(290,505);
  laser5.addImage("laser.png", laserImg);
  laser5.scale = 0.3;
  laser5.visible = true;
  laser5.debug = false;
  laser5.setCollider("rectangle",0,0,900,10);
  laser4.velocityY = 1.8;
  laser5.velocityY = 1.8;

  laserblue = createSprite(570,202);
  laserblue.addImage("laserblue.png", laserblueImg);
  laserblue.scale = 0.4;
  laserblue.visible = true;
  laserblue.debug = false;
  laserblue.setCollider("rectangle",0,0,610,10);
 
  laserblue2 = createSprite(570,210);
  laserblue2.addImage("laserblue.png", laserblueImg);
  laserblue2.scale = 0.4;
  laserblue2.visible = true;
  laserblue2.debug = false;
  laserblue2.setCollider("rectangle",0,0,610,10);
 
  laserright = createSprite(939,440);
  laserright.addImage("laserright.png", laserrightImg);
  laserright.scale = 0.5;
  laserright.visible = true;
  laserright.debug = false;
  laserright.setCollider("rectangle",0,0,10,270);

  laserright2 = createSprite(932,440);
  laserright2.addImage("laserright.png", laserrightImg);
  laserright2.scale = 0.5;
  laserright2.visible = true;
  laserright2.debug = false
  laserright2.setCollider("rectangle",0,0,10,270);

  realNotes = createSprite(560,320);
  realNotes.addAnimation("realNotes.png", realNotesImg);
  realNotes.scale = 1.2;
  realNotes.visible = false;

  knife = createSprite(400,165);
  knife.addImage("knife.png", knifeImg);
  knife.scale = 0.2;
  knife.debug = false;
  knife.setCollider("rectangle",0,0,300,100);

  machine = createSprite(974,110);
  machine.addImage("machine.png", machineImg);
  machine.scale = 0.2;

  machine1  = createSprite(674,213);
  machine1.addImage("machine.png", machineImg);
  machine1.scale = 0.2;

  machine2  = createSprite(160,490);
  machine2.addImage("machine.png", machineImg);
  machine2.scale = 0.2;

  machine4  = createSprite(715,490);
  machine4.addImage("machine.png", machineImg);
  machine4.scale = 0.2;

  diamond = createSprite(random(473,670),352);
  diamond.addImage("diamond.png", diamondImg);
  diamond.scale = 0.1;
  diamond.setCollider("rectangle", 0,0, 40,40);
  diamond.visible = false;

  ring = createSprite(random(493,665),208);
  ring.addImage("ring.png", ringImg);
  ring.scale = 0.1;
  ring.setCollider("rectangle", 0,0, 40,40);
  ring.visible = false;
  
  key1 = createSprite(410,80,0,0);
  key1.addImage("key.png", key1Img);
  key1.scale = 0.1;
  key1.visible = true;
  key1.debug = false;
  key1.setCollider("rectangle",0,0,55,55);

  button = createSprite(763,155);
  button.addAnimation("button.png", buttonImg);
  button.scale =0.1;
  button.visible = false;
  button.debug = false;
  button.setCollider("circle",0,0,155);

  money = createSprite(random(473,670),315);
  money.addImage("money.png", moneyImg);
  money.scale = 0.2;
  money.setCollider("rectangle", 0,0, 40,40);
  money.visible = false;

  sack = createSprite(250,480);
  sack.addImage("sack.png", sackImg);
  sack.scale = 0.3;
  sack.setCollider("rectangle", 0,0, 70,70);

  treasure = createSprite(470,150);
  treasure.addImage("closetreasure.png", CtreasureImg);
  treasure.scale = 0.3;
  treasure.debug = true;

  notes = createSprite(910,250);
  notes.addImage("notes.png", notesImg);
  notes.scale = 0.3;
  notes.setCollider("rectangle", 0,0, 45, 45);

  potion = createSprite(920,340);
  potion.addImage("potion.png", potionImg);
  potion.scale = 0.2;
  potion.setCollider("rectangle", 0,0, 50,50);

  potion2 = createSprite(720,405);
  potion2.addImage("potion2.png", potion2Img);
  potion2.scale = 0.2;
  potion2.setCollider("rectangle", 0,0, 40,40);

  potion3 = createSprite(220,260);
  potion3.addImage("potion3.png", potion3Img);
  potion3.scale = 0.1;
  potion3.setCollider("rectangle", 0,0, 40,40);

  music = createSprite(886,430);
  music.addImage("music.png", musicImg);
  music.scale = 0.1;

  block = createSprite(720,202,10,20);
  block.shapeColor = "purple";
  block.visible = false;
  block2 = createSprite(932,165,10,20);
  block2.shapeColor = "purple";
  block2.visible = false;

  doorkey = createSprite(312,283,75,10);
  doorkey.shapeColor = rgb(222, 7, 28);
  door2 = createSprite(790,281,45,10);
  door2.shapeColor = "blue";
  door3 = createSprite(792,378,45,10);
  door3.shapeColor = "blue";
  door4 = createSprite(696,450,10,35);
  door4.shapeColor = "blue";
  door5 = createSprite(441,450,10,35);
  door5.shapeColor = "blue";
  door6 = createSprite(440,307,10,30);
  door6.shapeColor = "blue";
  door7 = createSprite(696,258,10,30);
  door7.shapeColor = "blue";
  doortreasure = createSprite(696,116,10,35);
  doortreasure.shapeColor = rgb(222, 7, 28);
  dooropen = createSprite(598,47,54,10);
  dooropen.shapeColor = rgb(222, 7, 28);

  thief = createSprite(570,630);
  thief.addAnimation("thiefUR.png", thiefstandingUR);
  thief.scale = 0.7;
  thief.setCollider("circle",0,0,20);

  wall1 = createSprite(372,47,390,10);
  wall1.shapeColor = 0;
  wall2 = createSprite(760,47,260,10);
  wall2.shapeColor = 0;
  wall3 = createSprite(825,520,265,10);
  wall3.shapeColor = 0;
  wall4 = createSprite(313,520,270,10);
  wall4.shapeColor = 0;
  wall5 = createSprite(182,285,10,475);
  wall5.shapeColor = 0;
  wall6 = createSprite(952,308,10,434);
  wall6.shapeColor = 0;
  wall7 = createSprite(440,170,10,238);
  wall7.shapeColor = 0;
  wall8 = createSprite(440,375,10,100);
  wall8.shapeColor = 0;
  wall9 = createSprite(440,375,10,100);
  wall9.shapeColor = 0;
  wall10 = createSprite(442,495,10,50);
  wall10.shapeColor = 0;
  wall11 = createSprite(696,495,10,50);
  wall11.shapeColor = 0;
  wall12 = createSprite(696,70,10,50);
  wall12.shapeColor = 0;
  wall13 = createSprite(696,187,10,100);
  wall13.shapeColor = 0;
  wall14 = createSprite(696,353,10,150);
  wall14.shapeColor = 0;
  wall15 = createSprite(572,189,255,10);
  wall15.shapeColor = 0;
  wall16 = createSprite(572,378,255,10);
  wall16.shapeColor = 0;
  wall17 = createSprite(725,378,85,10);
  wall17.shapeColor = 0;
  wall18 = createSprite(887,378,140,10);
  wall18.shapeColor = 0;
  wall19 = createSprite(887,281,140,10);
  wall19.shapeColor = 0;
  wall20 = createSprite(727,281,70,10);
  wall20.shapeColor = 0;
  wall21 = createSprite(227,281,90,10);
  wall21.shapeColor = 0;
  wall22 = createSprite(397,283,90,10);
  wall22.shapeColor = 0;
  wall23 = createSprite(919,67,10,85);
  wall23.shapeColor = 0;
  wall23.rotation = 125;
  wall24 = createSprite(480,497,10,85);
  wall24.shapeColor = 0;
  wall24.rotation = 125;
  wall24 = createSprite(660,496,10,85);
  wall24.shapeColor = 0;
  wall24.rotation = 50;
  wall25 = createSprite(660,496,10,85);
  wall25.shapeColor = 0;
  wall25.rotation = 50;

  welmessage = createSprite(570,270);
  welmessage.addImage("welmessage.png", welmessageImg);
  welmessage.visible = true;
  welmessage.scale = 0.8;
  welmessage.setCollider("rectangle", 0,0, 35,35);

  intromessage = createSprite(570,270);
  intromessage.addImage("intromessage.png", intromessageImg);
  intromessage.visible = false;
  intromessage.scale = 0.9;
  intromessage.setCollider("rectangle", 0,0, 35,35);

  storymessage = createSprite(570,260);
  storymessage.addImage("storymessage.png", storymessageImg);
  storymessage.visible = false;
  storymessage.scale = 1;
  storymessage.setCollider("rectangle", 0,0, 35,35);

  lasermessage = createSprite(570,300);
  lasermessage.addImage("lasermessage.png", lasermessageImg);
  lasermessage.visible = false;
  lasermessage.scale = 0.8;
  lasermessage.setCollider("rectangle", 0,0, 35,35);

  warningdoor = createSprite(520,-1,10,138);
  warningdoor.shapeColor = "black"
  warningdoor.visible = false;

  button2 = createSprite(737,80);
  button2.addAnimation("button2.png", buttonImg);
  button2.scale =0.1;
  button2.visible = false;
  button2.debug = false;
  button2.setCollider("circle",0,0,155);

  next = createSprite(740,470);
  next.addImage("next.png", nextImg);
  next.scale = 0.16;
  next.visible = true;

  lastnext = createSprite(815,270);
  lastnext.addImage("lastnext.png", lastnextImg);
  lastnext.scale = 0.16;
  lastnext.visible = false;

  intronext = createSprite(815,370);
  intronext.addImage("intronext.png", intronextImg);
  intronext.scale = 0.16;
  intronext.visible = false;

  pressme = createSprite(570,270);
  pressme.addImage("pressme.png", pressmeImg);
  pressme.visible = false;
  pressme.scale = 0.8;
  pressme.debug = false;
  pressme.setCollider("circle",-10,10,126);

  youwin = createSprite(570,270);
  youwin.addImage("youwin.png", youwinImg);
  youwin.scale = 1;
  youwin.visible = false;

  gameOverImg = createSprite(570,270);
  gameOverImg.addImage('gameOver.png', gameOverImg1);
  gameOverImg.scale = 0.9;
  gameOverImg.visible = false;

  retry = createSprite(572,410);
  retry.addImage("retry.png", retryImg);
  retry.scale = 0.2;
  retry.visible = false;
  retry.debug = true;

  playagain = createSprite(572,510);
  playagain.addImage("playagain.png", playagainImg);
  playagain.visible = false;
  playagain.scale = 0.4;

  popR = createSprite(810,370);
  popR.addImage("popR.png", popRImg);
  popR.scale = 0.6;
  popR.visible = false;

  popL = createSprite(310,370);
  popL.addImage("popL.png", popLImg);
  popL.scale = 0.7;
  popL.visible = false;

  knife.velocityX = 4.5;
}



function draw() {
  background(bg); 

  machine2.y = laser4.y;
  machine2.y = laser5.y;
  machine1.y = laserblue.y;
  machine1.y = laserblue2.y;
  machine4.x = laserright.x;
  machine4.x = laserright2.x;

  thief.bounceOff(block);
  thief.bounceOff(block2);
  knife.bounceOff(wall7);
  knife.bounceOff(wall5);

  warningdoor.collide(wall15);

  if(keyWentDown(DOWN_ARROW)){
    thief.velocityY=3;
    thief.addAnimation("walking_D", thiefwalkingD);
    thief.changeAnimation("walking_D");
  }
  else if(keyWentUp(DOWN_ARROW)){
    thief.velocityY=0;
    thief.addAnimation("standing_D", thiefstandingDR);
    thief.changeAnimation("standing_D");
    }  
   if(keyWentDown(UP_ARROW)){
     thief.velocityY=-3;
     thief.addAnimation("walking_U", thiefwalkingU);
     thief.changeAnimation("walking_U");
   }
   else if(keyWentUp(UP_ARROW)){
     thief.velocityY=0;
     thief.addAnimation("standing_U", thiefstandingUR);
     thief.changeAnimation("standing_U");
   }
   if(keyWentDown(RIGHT_ARROW)){
     thief.velocityX=3;
     thief.addAnimation("walking_R", thiefwalkingR);
     thief.changeAnimation("walking_R");
   }
   else if(keyWentUp(RIGHT_ARROW)){
     thief.velocityX=0;
     thief.addAnimation("standing_R", thiefstandingRR);
     thief.changeAnimation("standing_R");
   }
   if(keyWentDown(LEFT_ARROW)){
     thief.velocityX=-3;
     thief.addAnimation("walking_L", thiefwalkingL);
     thief.changeAnimation("walking_L");
   }
   else if(keyWentUp(LEFT_ARROW)){
     thief.velocityX=0;
     thief.addAnimation("standing_L", thiefstandingLR);
     thief.changeAnimation("standing_L");
   }

   if (thief.isTouching(wall1)||thief.isTouching(wall2)||
    thief.isTouching(wall3)||thief.isTouching(wall4)||
    thief.isTouching(wall5)||thief.isTouching(wall6)||
    thief.isTouching(wall7)||thief.isTouching(wall8)||
    thief.isTouching(wall9)||thief.isTouching(wall10)||
    thief.isTouching(wall11)||thief.isTouching(wall12)||
    thief.isTouching(wall13)||thief.isTouching(wall14)||
    thief.isTouching(wall15)||thief.isTouching(wall16)||
    thief.isTouching(wall17)||thief.isTouching(wall18)||
    thief.isTouching(wall19)||thief.isTouching(wall20)||
    thief.isTouching(wall21)||thief.isTouching(wall22)||
    thief.isTouching(wall23)||thief.isTouching(wall24)||
    thief.isTouching(wall25)){
    thief.collide(wall1);
    thief.collide(wall2);
    thief.collide(wall3);
    thief.collide(wall4);
    thief.collide(wall5);
    thief.collide(wall6);
    thief.collide(wall7);
    thief.collide(wall8);
    thief.collide(wall9);
    thief.collide(wall10);
    thief.collide(wall11);
    thief.collide(wall12);
    thief.collide(wall13);
    thief.collide(wall14);
    thief.collide(wall15);
    thief.collide(wall16);
    thief.collide(wall17);
    thief.collide(wall18);
    thief.collide(wall19);
    thief.collide(wall20);
    thief.collide(wall21);
    thief.collide(wall22);
    thief.collide(wall23);
    thief.collide(wall24);
    thief.collide(wall25);
    }

    laser4.bounceOff(wall22);
    laser5.bounceOff(wall22);
    laser4.bounceOff(wall4);
    laser5.bounceOff(wall4);
    laserblue.bounceOff(wall15);
    laserblue2.bounceOff(wall15);
    laserblue2.bounceOff(wall16);
    laserblue.bounceOff(wall16);
    laserright.bounceOff(wall6);
    laserright.bounceOff(door4);
    laserright2.bounceOff(door4);
    laserright2.bounceOff(wall6);
    block.bounceOff(wall6);
    block.bounceOff(wall13);
    block2.bounceOff(wall6);
    block2.bounceOff(wall13);
    thief.collide(warningdoor);
    thief.collide(notes);
    thief.bounceOff(block);
    thief.bounceOff(block2);

    if(mousePressedOver(button)){
      button.visible = false;
      lasermessage.visible = false;
      click_sound.play();
     }

     if(thief.isTouching(key1)&& gameState == PLAY){
      claim_sound.play();
      block.visible = true;
      block2.visible = true;
      block2.velocityX=-5;
      block.velocityX=5;
     
      gameOverImg1.visible=true;

      if(thief.isTouching(block)||thief.isTouching(block2)){
        lifeover();
        pain_sound.play();
      }
      laserblue.velocityY = 1.2;
      laserblue2.velocityY = 1.2;
      laserright.velocityX = 1.5;
      laserright2.velocityX = 1.5;
      warningdoor.visible = true;
      warningdoor.shapeColor = "yellow"
      warningdoor.velocityY = 0.07;
      key1.remove();
      laser1.remove();
      laser2.remove();
      laser3.remove();
      doortreasure.destroy();
      doortreasure1 = createSprite(696,116,10,35);
      doortreasure1.shapeColor = "blue";
      treasure.addAnimation("opentreasure.png",OtreasureImg)
      treasure.changeAnimation("opentreasure.png");
      treasure.debug = true;
      treasure.setCollider("rectangle",0,0,20,20);
    }

    if(mousePressedOver(next)){
      click_sound.play();
      next.destroy();
      intronext.visible = true;
      storymessage.visible = true;
      welmessage.destroy();
    }
     if(mousePressedOver(intronext)){
        click_sound.play();
        storymessage.destroy();
        intronext.destroy();
        intromessage.visible = true;
        lastnext.visible = true;
      }
  
      if(mousePressedOver(lastnext)){
        click_sound.play();
        pressme.visible = true;
        intromessage.destroy();
        lastnext.destroy();
      }
  
      if(mousePressedOver(pressme)){
        click_sound.play();
        pressme.destroy();
        claim_sound.play();
      }
    
  drawSprites();

  realdraw();

  fill("orange");
  textSize(20);
  textFont("Georgia");
  //TextStyle(BOLD);
  text("Score: "+ score, 1000, 90);

  fill("yellow");
  textSize(20);
  text("Treasures: $"+ treasures, 1000, 120);

  fill(255);
  textSize(20);
  text("Lives:"+ lives , 1000, 150);

}

function lifeover(){ 
  lives = lives - 1; 
  if(lives>=1) { 
  gameState = PLAY; 
} else if(lives===0){
  gameOver_sound.play();
  bg_sound.stop();
  gameState = END;} }
     
  function realdraw(){
    
    

    if(gameState === PLAY){ 

      if(warningdoor.collide(wall15)){
        gameOver_sound.play();
        gameState = OVER;
      }

      realNotes.depth = wall15.depth;   
      realNotes.depth = realNotes.depth+1;
      realNotes.depth = wall16.depth;
      realNotes.depth = realNotes.depth+1;
      realNotes.depth = wall24.depth;
      realNotes.depth = realNotes.depth+1;

       gameOverImg.depth = wall15.depth;   
       gameOverImg.depth = gameOverImg.depth+1;
       gameOverImg.depth = wall16.depth;
       gameOverImg.depth = gameOverImg.depth+1;
       gameOverImg.depth = wall24.depth;
       gameOverImg.depth = gameOverImg.depth+1;

       thief.collide(treasure);
    

       if(thief.isTouching(potion)){
        claim_sound.play();
        potion.remove();
        score = score + 12;
        money.visible = true;
      }  

      if(thief.collide(notes)){
        claim_sound.play();
        realNotes.visible = true;
        button2.visible = true;
        notes.remove();
        doorkey.destroy();
        doorkey1 = createSprite(312,283,75,10);
        doorkey1.shapeColor = "blue"; 
        key1.visible = true;
        score = score + 5;
      }
      if(mousePressedOver(button2)){
        click_sound.play();
        button2.visible = false;
        realNotes.visible = false;
      }
       

      if(thief.isTouching(money)){
        claim_sound.play();
        money.remove();
        treasures += 400;
      }

      if(thief.isTouching(diamond)){
        claim_sound.play();
        diamond.remove();
        score = score + 24;
      }
      if(thief.isTouching(potion2)){
        claim_sound.play();
        potion2.remove();
        score = score + 18;
        diamond.visible = true;
       }
      
      if(thief.isTouching(potion3)){
        claim_sound.play();
        ring.visible = true;
        potion3.remove();
        score = score + 7;
      }  

      if(thief.isTouching(ring)){
        ring.remove();
        score = score + 25;
      }
     
      if(thief.collide(dooropen)){
        popR.visible = true;
        popL.visible = true;
        youwin.visible = true;
        thief.velocityX = 0;
        thief.velocityY = 0;
        victory_sound.play();
       }
     
       if(thief.isTouching(treasure)){
        claim_sound.play();
        dooropen.shapeColor = "blue";
         treasure.addAnimation("emptytreasure.png",EtreasureImg);
         treasure.changeAnimation("emptytreasure.png");
         treasure.x = 464;
         treasure.y = 160;
         treasures += 999999;
       }
  
       treasure.debug = false;
       treasure.setCollider("rectangle",0,0, 40,40);
  
       if(thief.isTouching(music)){
        claim_sound.play();
         music.remove();
         score = score + 5;
         claim_sound.play();
       }  
       if(thief.isTouching(sack)){
        claim_sound.play();
         sack.remove();
         treasures += 1500;
       } 
  
       if (thief.isTouching(doorkey)){
        claim_sound.play();
        thief.bounceOff(doorkey);
       }
     
  
      if(thief.collide(laser3)||thief.collide(laser1)||thief.collide(laser2)||thief.isTouching(knife)){
       lasermessage.visible = true;
       button.visible = true;
       pain_sound.play();
       lifeover();
      }
      }

   
        if(thief.collide(laser4)||thief.collide(laser5)||thief.collide(laserblue)||thief.collide(laserblue2)||thief.collide(laserright)||thief.collide(laserright2)){
          lifeover();
          pain_sound.play();
          }
        
          if (thief.isTouching(doortreasure)){
            thief.bounceOff(doortreasure);
           }
  
  if(gameState === END){
     retry.visible = true;
     thief.velocityX = 0;
     thief.velocityY = 0;
     knife.velocityX = 0;
     lasermessage.visible = false;
     button.visible = false;
     button2.visible = false;
     laser4.velocityY = 0;
     laser5.velocityY = 0;
     laserblue.velocityY = 0;
     laserblue2.velocityY = 0;
     laserright.velocityX = 0;
     laserright2.velocityX = 0;
     block2.velocityX=0;
     block.velocityX=0;
     gameOverImg.visible = true;


     if(mousePressedOver(retry)){
      realdraw();
      gameState = PLAY;
      thief.x = 570;
      thief.y = 630;
    }
   }
  }
  

  