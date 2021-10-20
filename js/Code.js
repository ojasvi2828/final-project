class Code{

    constructor(){
        
    }
   
    
     clues() {
        if(gameState === "quiz"){
        fill("black")
        textSize(20)
        text("1. What is the full form of army?", 100,50)
        
    
        fill("black")
        textSize(20)
        text("2. What is the real name of RM?", 650,50)
       
        fill("black")
        textSize(20)
        text("3. Which member is known for their love of eating?{stage name}", 100,300)
       
        fill("black")
        textSize(20)
        text("4. what was BTS’s very first song?", 650,300)

        fill("black")
        textSize(20)
        text("5. who was the last member that Bighit revealed? {stage name}", 300,175)
        }


        if(gameState === "avglevel"){
            fill("black")
        textSize(20)
        text("1. Which member is an atheist?{stage name}", 50,50)
        
    
        fill("black")
        textSize(20)
        text("2. which member has a dog named jjangu?{stage name}", 600,50)
       
        fill("black")
        textSize(20)
        text("3.how many song did rm wrote till 2021?", 50,300)
       
        fill("black")
        textSize(20)
        text("4. what is BTS’s longest song?", 600,300)

        fill("black")
        textSize(20)
        text("5.which member was ballet dancer before their debut?{stage name}", 250,175)
        }


        if(gameState === "prolevel"){
        fill("black")
        textSize(20)
        text("1.which member had an ex who left him for an other guy?{stage name}", 50,50)
       
        fill("black")
        textSize(20)
        text("2.when did rm became a bts member?", 600,50)
       
        fill("black")
        textSize(20)
        text("3. how many songs does bts have released till 2021?", 50,300)
       
        fill("black")
        textSize(20)
        text("4.what was the first song win award for?", 600,300)

        fill("black")
        textSize(20)
        text("5.which member recived death threats during love yourself tour?{stage name}", 250,175)
        }
    }

}


