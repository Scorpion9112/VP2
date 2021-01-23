class Food{
    constructor(foodStock,lastFed){
        this.image= loadImage("Milk.png")
    } 
    getFoodStock(){
     var foodCountRef = database.ref('foodCount')
     foodCountRef.on("value",function(data){
         foodCount = data.val()
     })
 }
     updateFoodStock(){
     database.ref('/').update({
     foodCount:count
     })
 }
 deductFoodStock(){
     var foodIndex = "food"+ foodCount
     database.ref(foodIndex).set({
         count:food
     })
 }
  display(){
  var x=80
  var y=100
 
  imageMode(CENTER)
  image(this.image,720,220,70,70)
 
  if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
     if(i%10==0){
     x=80
     y=y+50
 }
 image(this.image,x,y,50,50)
 x=x+30
      }
  }
  database=firebase.database()
  
  
  
    }
  }
 
 
