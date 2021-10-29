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
        text("3. Who is known for their love of eating?{stage name}", 100,300)
       
        fill("black")
        textSize(20)
        text("4. What was BTS’s very first song?", 650,300)

        fill("black")
        textSize(20)
        text("5. Who was the last member that Bighit revealed? {stage name}", 300,175)
        }


        if(gameState === "avglevel"){
            fill("black")
        textSize(20)
        text("1. Which member is an atheist?{stage name}", 50,50)
        
    
        fill("black")
        textSize(20)
        text("2. who has a dog named jjangu?{stage name}", 600,50)
       
        fill("black")
        textSize(20)
        text("3.How many song did rm wrote till 2021?", 50,300)
       
        fill("black")
        textSize(20)
        text("4. What is BTS’s longest song?", 600,300)

        fill("black")
        textSize(20)
        text("5.Which member was ballet dancer before their debut?{stage name}", 250,175)
        }


        if(gameState === "prolevel"){
        fill("black")
        textSize(20)
        text("1.Who had an ex who left him for an other guy?{stage name}", 50,50)
       
        fill("black")
        textSize(20)
        text("2.when did rm became a bts member?", 600,50)
       
        fill("black")
        textSize(20)
        text("3. How many songs does bts have released till 2021?", 50,300)
       
        fill("black")
        textSize(20)
        text("4.What was the first song they won award for?", 600,300)

        fill("black")
        textSize(20)
        text("5.which member recived death threats during love yourself tour?{stage name}", 250,175)
        }
    }

}


