function bounceoff(sprite1,sprite2){
    if (sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
    && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2) {
      sprite1.velocityX = sprite1.velocityX * (-1);
      sprite2.velocityX = sprite2.velocityX * (-1);
  }

  if (sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
  && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2){
    sprite1.velocityY = sprite1.velocityY * (-1);
    sprite2.velocityY = sprite2.velocityY * (-1);
    }
  }
  
  function istouching(sprite1,sprite2){
    if (abs(sprite1.x - sprite2.x) < sprite2.width/2 + sprite1.width/2 && 
      abs(sprite1.y - sprite2.y) < sprite2.height/2 + sprite1.height/2){
      return true;
    }
  
    else{
      return false;
    }
  }

function bounce(movingsprite,fixedsprite){
    if (movingsprite.x - fixedsprite.x < fixedsprite.width/2 + movingsprite.width/2
        && fixedsprite.x - movingsprite.x < fixedsprite.width/2 + movingsprite.width/2) {
            fixedsprite.velocityX = movingsprite.velocityX;
            movingsprite.velocityX = 0;
      }
    
      if (movingsprite.y - fixedsprite.y < fixedsprite.height/2 + movingsprite.height/2
      && fixedsprite.y - movingsprite.y < fixedsprite.height/2 + movingsprite.height/2){
        fixedsprite.velocityY = movingsprite.velocityY;
        movingsprite.velocityY = 0;
        }
      
}

function displace(movingsprite,fixedsprite){
    if (movingsprite.x - fixedsprite.x < fixedsprite.width/2 + movingsprite.width/2
        && fixedsprite.x - movingsprite.x < fixedsprite.width/2 + movingsprite.width/2) {
            fixedsprite.velocityX = movingsprite.velocityX;
      }
    
      if (movingsprite.y - fixedsprite.y < fixedsprite.height/2 + movingsprite.height/2
      && fixedsprite.y - movingsprite.y < fixedsprite.height/2 + movingsprite.height/2){
        fixedsprite.velocityY = movingsprite.velocityY;
        }
}

function collide(movingsprite,fixedsprite){
    if (movingsprite.x - fixedsprite.x < fixedsprite.width/2 + movingsprite.width/2
        && fixedsprite.x - movingsprite.x < fixedsprite.width/2 + movingsprite.width/2) {
            movingsprite.velocityX = 0;
            fixedsprite.velocityX = 0;
      }
    
      if (movingsprite.y - fixedsprite.y < fixedsprite.height/2 + movingsprite.height/2
      && fixedsprite.y - movingsprite.y < fixedsprite.height/2 + movingsprite.height/2){
        fixedsprite.velocityY = 0;
        movingsprite.velocityY = 0;
        }
}