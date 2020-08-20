var bullet,wall,speed,weight,thickness,damage,metal,randomMetal;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(200, 200, 40, 10);
  bullet.shapeColor = "grey";

  wall = createSprite(1500, 200, 30, 400);
  wall.shapeColor = "black";

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(35,52);

  randomMetal = Math.round(random(1,5));

  switch(randomMetal){
    case 1: metal = "Titanium";
        break;
    case 2: metal = "Steel";
        break;
    case 3: metal = "Tugsten";
        break;
    case 4: metal = "Iconel";
        break;
    case 5: metal = "Chromium"

  }

  bullet.velocityX = Math.round(speed/3.5);

  damage = Math.round((0.5*weight*speed*speed) /(thickness*thickness*thickness));

  fail = 0;

  console.log(randomMetal)
  console.log(metal);

  textSize(15);
}

function draw() {
  background(255,255,255);  



    if(istouching(bullet,wall)){
      bullet.velocityX = 0;
      bullet.x = 1466;

      if(damage <= 10){
        bullet.shapeColor = "green";

        text("test = Sucess, Damage = " + damage + ", " + metal + " is a viable option!", 750,200);
      }

      if(damage > 10){
        bullet.shapeColor = "red";
        text("test = Failure, Damage = " + damage + ", " + metal + " is not a viable option!", 750,200);
      }
    }

  drawSprites();
}