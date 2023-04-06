let ball = []

function setup() {
  createCanvas(600, 600);
  noStroke();
  
  for(let i = 0; i < 5; i++){
    ball[i] = new Ball(random(width), random(height), 200);
  }
}

function draw() {
  background(20,40);
  
  for(let i = 0; i < ball.length; i++){
    fill(10000/ball[i].size,ball[i].size+100,255-255/ball[i].size*2)
    ball[i].move()
  }
  
}

function mousePressed(){
  for(let i = 0; i < ball.length; i++){
      if(dist(mouseX,mouseY,ball[i].x,ball[i].y)<ball[i].size/2){
        ball[i].divide()
        ball[ball.length] = new Ball(ball[i].x, ball[i].y, ball[i].size)
        break;
  }
  }


}

class Ball {
  constructor(_x,_y,_siz){
    this.x = _x
    this.y = _y
    this.size = _siz
    this.xSpeed = random(-1,1)
    this.ySpeed = random(-1,1)
  }
  
  move(){
    circle(this.x,this.y,this.size)
    this.x += this.xSpeed * 200/(this.size*3);
    this.y += this.ySpeed* 200/(this.size*3);
    
    if(this.x > width || this.x < 0){
      this.xSpeed *= -1
    }
    
    if(this.y > height || this.y < 0){
      this.ySpeed *= -1
    }
  }
  
  divide(){
    this.size = this.size/2
  }

}