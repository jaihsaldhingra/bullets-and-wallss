
    function isTouching(bullet,wall){
        if(bullet.x-wall.x<=bullet.width/2+wall.width/2&&wall.x-bullet.x<=wall.width/2+bullet.width/2&&bullet.y-wall.y<=bullet.height/2+wall.height/2&&wall.y-bullet.y<=wall.height/2+bullet.height/2){
          
         return true
        }
        else{
      return false
      
      
        }}