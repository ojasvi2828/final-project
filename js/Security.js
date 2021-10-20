class Security {

    constructor(){

        this.access1 = createInput("Put Your Answer")
        this.access1.position(116,74);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(116,100);
        this.button1.style('background', 'pink');    

        this.access2 = createInput("Put Your Answer")
        this.access2.position(666,74);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(666,100);
        this.button2.style('background', 'pink');

        this.access3 = createInput("Put Your Answer")
        this.access3.position(102,322);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(102,352);
        this.button3.style('background', 'pink'); 

        this.access4 = createInput("Put Your Answer")
        this.access4.position(668,322);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(668,352);
        this.button4.style('background', 'pink');

        this.access5 = createInput("Put Your Answer")
        this.access5.position(312,192);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(312,222);
        this.button5.style('background', 'pink');
    }

    show(){
        this.button1.show();
        this.access1.show();
        this.button2.show();
        this.access2.show();
        this.button3.show();
        this.access3.show();
        this.button4.show();
        this.access4.show();
        this.button5.show();
        this.access5.show();
    }

    hide(){
        this.button1.hide();
        this.access1.hide();
        this.button2.hide();
        this.access2.hide();
        this.button3.hide();
        this.access3.hide();
        this.button4.hide();
        this.access4.hide();
        this.button5.hide();
        this.access5.hide();
    }

    
    display(){

        this.button1.mousePressed(() => {
            count++;
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            count++;
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            count++;
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            count++;
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            count++;
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });


    }
}